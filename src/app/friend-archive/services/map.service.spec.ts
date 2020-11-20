import { TestBed } from '@angular/core/testing';
import { MapService } from './map.service';

describe('FormConfigService', () => {
  let service: MapService;

  const friends = [
    {
        name: 'chandler',
        friends: [
            'monica', 'phoebe', 'joey'
        ],
        age: 30,
        weight: 86,
    },
    {
        name: 'joey',
        friends: [
            'ross', 'rachel',
        ],
        age: 30,
        weight: 86,
    }];

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

  beforeEach(() => {
    TestBed.configureTestingModule({
        providers: [
            MapService
        ]
    });
    service = TestBed.inject(MapService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should transform friend data to chart-usable data', async () => {
      const calculatedChartData = await
        service.mapToNetworkData(friends)
        .toPromise();

      expect(calculatedChartData)
        .toEqual(chartData);
  });
});
