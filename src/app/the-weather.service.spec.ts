import { TestBed } from '@angular/core/testing';

import { TheWeatherService } from './the-weather.service';

describe('TheWeatherService', () => {
  let service: TheWeatherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TheWeatherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
