import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NetworkChartComponent } from './network-chart.component';
import { select, selectAll } from 'd3-selection';
import { scaleOrdinal } from 'd3-scale';
import {
  forceSimulation,
  forceManyBody,
  forceLink,
  forceX,
  forceY,
} from 'd3-force';
import { schemeAccent } from 'd3-scale-chromatic';

const d3 = {
  select,
  selectAll,
  forceSimulation,
  forceManyBody,
  forceLink,
  forceX,
  forceY,
  scaleOrdinal,
  schemeAccent
};
describe('NetworkChartComponent', () => {
  let component: NetworkChartComponent;
  let fixture: ComponentFixture<NetworkChartComponent>;
  const chartData = {
    nodes: [
      {
          name: 'chandler',
          id: 0,
      },
      {
          name: 'monica',
          id: 1,
      },
      {
          name: 'phoebe',
          id: 2,
      },
      {
          name: 'joey',
          id: 3,
      },
      {
          name: 'ross',
          id: 4,
      },
      {
          name: 'rachel',
          id: 5,
      }
    ],
    links: [
        {
            source: 0,
            target: 1
        },
        {
          source: 0,
          target: 2
      },
      {
          source: 0,
          target: 3
      },
      {
          source: 3,
          target: 4
      },
      {
          source: 3,
          target: 5
      }
    ]
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NetworkChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NetworkChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should draw SVG with proper attributes', () => {
    component.container = {
      nativeElement: document.createElement('div')
    };

    const d3SpyObject =
      jasmine.createSpyObj('d3', ['append', 'attr', 'selectAll']);

    spyOn(d3, 'select').and.returnValue(d3SpyObject);
    spyOn(d3, 'selectAll').and.returnValue(d3SpyObject);

    const svgSpyObject =
      jasmine.createSpyObj('svg', ['append', 'attr', 'style']);

    d3SpyObject.append.and.returnValue(svgSpyObject);

    d3SpyObject.attr.and.callFake(function(_key, _value) {
      return this;
    });

    svgSpyObject.append.and.returnValue(svgSpyObject);

    svgSpyObject.attr.and.callFake(function(_key, _value) {
      return this;
    });

    svgSpyObject.style.and.callFake(function(_key, _value) {
      return this;
    });

    spyOn(component, 'drawChart');

    component.data = chartData;

    fixture.detectChanges();
    component.ngAfterViewInit();

    expect(d3.select)
      .toHaveBeenCalled();
  });


});
