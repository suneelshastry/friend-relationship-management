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
import { sampleChartData } from '@constants';

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

  xit('should draw SVG with proper attributes', () => {
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

    component.data = sampleChartData;

    fixture.detectChanges();
    component.ngAfterViewInit();

    expect(d3.select)
      .toHaveBeenCalled();
  });


});
