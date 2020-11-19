import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component, ElementRef,
  Input, OnChanges,
  OnDestroy, SimpleChanges, ViewChild
} from '@angular/core';
import {
  ChartLayout,
  NetworkChartData,
  NetworkNode
} from './network-chart.interface';

// Todo Pick parts of d3 lib that is required.
import * as d3 from 'd3';

@Component({
  selector: 'app-network-chart',
  templateUrl: './network-chart.component.html',
  styleUrls: ['./network-chart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NetworkChartComponent implements
  AfterViewInit, OnChanges, OnDestroy {
  @Input() data: NetworkChartData;
  @Input() chartLayout: ChartLayout;

  // TODO add types for all d3 artifacts and variables
  color = d3.scaleOrdinal(d3.schemeAccent);
  @ViewChild('chart')container: ElementRef<any>;
  svgElement;
  link;
  node;
  texts;
  simulation;

  // Todo refactor this function
  ngOnChanges(change: SimpleChanges): void {
    const {data, chartLayout} = change;

    if (data && data.isFirstChange()) {
      return;
    }

    if (chartLayout && chartLayout.isFirstChange()) {
      return;
    }

    if (chartLayout) {
      this.removeGraph();
      this.drawChart();
      return;
    }

    if (data) {
      this.updateData();
    }
  }

  ngAfterViewInit(): void {
    this.drawChart();
  }

  drawChartSvg(): void {
    const {width = 800, height = 800} = this.chartLayout || {};

    this.svgElement = d3.select(this.container.nativeElement)
    .append('svg')
      .attr('width', width)
      .attr('height', height)
    .append('g')
      .attr(
        'transform',
        `translate(
          ${width / 2},${height / 2}
        )`
      );
}

  addSimulation(): void {
    this.simulation = d3.forceSimulation()
      .force('charge', d3.forceManyBody().strength(-1000))
      .force('link', d3.forceLink().distance(200))
      .force('x', d3.forceX())
      .force('y', d3.forceY())
      .on('tick', () => this.ticked());
  }

  addLink(): void {
    this.link = this.svgElement
      .append('g')
        .attr('stroke', '#000')
        .attr('stroke-width', 1.5)
      .selectAll('line');
  }

  addNode(): void {
    this.node = this.svgElement.append('g')
      .attr('stroke', '#fff')
      .attr('stroke-width', 1.5)
    .selectAll('circle');
  }

  addTextLabels(): void {
    this.texts = this.svgElement.append('g')
    .selectAll('text.label');
  }

  ticked(): void {
    this.node.attr('cx', d => d.x)
        .attr('cy', d => d.y);

    this.link.attr('x1', d => d.source.x)
        .attr('y1', d => d.source.y)
        .attr('x2', d => d.target.x)
        .attr('y2', d => d.target.y);

    this.texts.attr('transform', d => `translate(${d.x}, ${d.y})`);
  }

  // Todo refactor this method
  updateData(): void {
    const {nodes = [], links = []} = this.data || {};
    const oldNodeData: Map<number, NetworkNode> = new Map(
      this.node.data()
        .map((d: NetworkNode) => [d.id, d])
    );
    const mergedNodes = nodes
      .map(d => {
        const old = oldNodeData.get(d.id);
        return {
          ...old,
          d
        };
      }
    );

    const mergedLink = links.map(d => {
      return {...d};
    });

    this.node = this.node
        .data(mergedNodes, d => d.id)
        .join(enter => enter.append('circle')
          .attr('r', 24)
          .attr('fill', d => this.color(d.d.id))
        );

    this.link = this.link
        .data(mergedLink, d => [d.source, d.target])
        .join('line');

    this.texts = this.texts
      .data(mergedNodes, data => data.d)
      .join('text')
      .text(data => data.d.name);

    this.simulation.nodes(mergedNodes);
    this.simulation.force('link').links(mergedLink);
    this.simulation.alpha(1).restart();
  }

  drawChart(): void {
    this.drawChartSvg();
    this.addSimulation();
    this.addLink();
    this.addNode();
    this.addTextLabels();
    this.updateData();
  }

  removeGraph(): void {
    d3.select(this.container.nativeElement).selectAll('*').remove();
  }

  ngOnDestroy(): void {
    this.removeGraph();
  }
}
