import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ExchangeRatesResponse} from './payLoads/exchange-rates-response';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExchangeRatesServiceService {

  constructor(private httpClient: HttpClient) {}

  getRates(from: string): Observable<ExchangeRatesResponse> {
    return this.httpClient.get<ExchangeRatesResponse>(`https://api.exchangeratesapi.io/latest?base=${from}`);
  }
}
