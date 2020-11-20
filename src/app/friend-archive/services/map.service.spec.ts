import { TestBed } from '@angular/core/testing';
import { MapService } from './map.service';
import {  sampleChartData,
    sampleFriendFormData,
} from '@constants';

describe('FormConfigService', () => {
  let service: MapService;

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
        service.mapToNetworkData(sampleFriendFormData)
        .toPromise();

      expect(calculatedChartData)
        .toEqual(sampleChartData);
  });
});
