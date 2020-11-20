import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import {
  ChartLayout,
  NetworkChartData,
  NetworkLink,
  NetworkNode,
} from './network-chart.interface';
import { select, selectAll } from 'd3-selection';
import { scaleOrdinal } from 'd3-scale';
import {
  forceSimulation,
  forceManyBody,
  forceLink,
  forceX,
  forceY,
} from 'd3-force';
import { schemePaired } from 'd3-scale-chromatic';
const d3 = {
  select,
  selectAll,
  forceSimulation,
  forceManyBody,
  forceLink,
  forceX,
  forceY,
  scaleOrdinal,
  schemePaired,
};

@Component({
  selector: 'app-network-chart',
  templateUrl: './network-chart.component.html',
  styleUrls: ['./network-chart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NetworkChartComponent
  implements AfterViewInit, OnChanges, OnDestroy {
  @Input() data: NetworkChartData;

  @Input() chartLayout: ChartLayout;

  // TODO add types for all d3 artifacts and variables
  color = d3.scaleOrdinal(d3.schemePaired);
  @ViewChild('chart') container: ElementRef<any>;
  svgElement;
  link;
  node;
  texts;
  simulation;

  // Todo refactor this function
  ngOnChanges(change: SimpleChanges): void {
    const { data, chartLayout } = change;

    // skip first change
    if (data && data.isFirstChange()) {
      return;
    }

    if (chartLayout && chartLayout.isFirstChange()) {
      return;
    }

    /* changes to chart layout
        warrants for chart destroy &redraw */
    if (chartLayout) {
      this.removeGraph();
      this.drawChart();
      return;
    }

    // Just update the data of the chart.
    if (data) {
      this.updateData();
    }
  }

  ngAfterViewInit(): void {
    this.drawChart();
  }

  /**
   * Draws initial svg container for the chart
   */
  private drawChartSvg(): void {
    // use parent's width and height as default.
    const {
      width = this.container.nativeElement.clientWidth,
      height = this.container.nativeElement.clientHeight,
    } = this.chartLayout || {};

    this.svgElement = d3
      .select(this.container.nativeElement)
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

  /**
   * configures simulation of the force
   */
  private addSimulation(): void {
    this.simulation = d3
      .forceSimulation()
      .force('charge', d3.forceManyBody().strength(-1000))
      .force('link', d3.forceLink().distance(200))
      .force('x', d3.forceX())
      .force('y', d3.forceY())
      .on('tick', () => this.ticked());
  }

  /**
   * sets up group for adding links
   */
  private addLink(): void {
    this.link = this.svgElement
      .append('g')
      .attr('stroke', '#000')
      .attr('stroke-width', 1.5)
      .selectAll('line');
  }

  /**
   * sets up group for adding nodes
   */
  private addNode(): void {
    this.node = this.svgElement
      .append('g')
      .attr('stroke', '#fff')
      .attr('stroke-width', 1.5)
      .selectAll('circle');
  }

  /**
   * sets up group for adding texts
   */
  private addTextLabels(): void {
    this.texts = this.svgElement.append('g').selectAll('text.label');
  }

  /**
   * Adjusts positions of nodes, links and texts
   * upon data addition.
   */
  private ticked(): void {
    this.node.attr('cx', (d) => d.x).attr('cy', (d) => d.y);

    this.link
      .attr('x1', (d) => d.source.x)
      .attr('y1', (d) => d.source.y)
      .attr('x2', (d) => d.target.x)
      .attr('y2', (d) => d.target.y);

    this.texts.attr('transform', (d) => `translate(${d.x}, ${d.y})`);
  }

  /**
   * Merges and update the date required for drawing
   * nodes, links and texts.
   */
  private updateData(): void {
    const mergedNodeData = this.generateNodes();
    const mergedLinkData = this.generateLinks();

    this.updateDrawNodes(mergedNodeData);
    this.updateDrawLinks(mergedLinkData);
    this.updateDrawTexts(mergedNodeData);

    this.simulation.nodes(mergedNodeData);
    this.simulation.force('link').links(mergedLinkData);
    this.simulation.alpha(1).restart();
  }

  /**
   * generates nodes by merging old and new data
   */
  private generateNodes(): NetworkNode[] {
    const { nodes = [] } = this.data || {};
    const oldNodeData: Map<number, NetworkNode> = new Map(
      this.node.data().map((d: NetworkNode) => [d.id, d])
    );
    const mergedNodes = nodes.map((d) => {
      const old = oldNodeData.get(d.id);
      return {
        ...old,
        d,
      };
    });

    return mergedNodes;
  }

  /**
   * generates links by considering new data
   */
  private generateLinks(): NetworkLink[] {
    const { links = [] } = this.data || {};
    const mergedLink = links.map((d) => {
      return { ...d };
    });

    return mergedLink;
  }

  /**
   * Updates nodes with new data and redraws
   */
  private updateDrawNodes(nodeData): void {
    this.node = this.node
      .data(nodeData, (d) => d.id)
      .join((enter) =>
        enter
          .append('circle')
          .attr('class', 'node')
          .attr('r', 24)
          .attr('fill', (d) => this.color(d.d.id))
      );
  }

  /**
   * Updates links with new data and redraws
   */
  private updateDrawLinks(linkData): void {
    this.link = this.link
      .data(linkData, (d) => [d.source, d.target])
      .join('line')
      .attr('class', 'link');
  }

  /**
   * Updates text-labels with new data and redraws
   */
  private updateDrawTexts(nodeData): void {
    this.texts = this.texts
      .data(nodeData, (data) => data.d)
      .join('text')
      .text((data) => data.d.name)
      .attr('class', 'label')
      .style('text-transform', 'capitalize')
      .attr('x', -10)
      .attr('y', 40);
  }

  drawChart(): void {
    this.drawChartSvg();
    this.addSimulation();
    this.addLink();
    this.addNode();
    this.addTextLabels();
    this.updateData();
  }

  private removeGraph(): void {
    d3.select(this.container.nativeElement).selectAll('*').remove();
  }

  ngOnDestroy(): void {
    this.removeGraph();
  }
}
