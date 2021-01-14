import { TestBed } from '@angular/core/testing';

import { ExchangeRatesServiceService } from './exchange-rates-service.service';

describe('ExchangeRatesServiceService', () => {
  let service: ExchangeRatesServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExchangeRatesServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
