import { Component, OnInit } from '@angular/core';
import {ExchangeRatesServiceService} from '../services/exchange-rates-service.service';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.scss']
})
export class CurrencyComponent implements OnInit {

  rates: {[key: string]: number} = {};
  from = 'USD';
  to = 'EUR';
  price = 2;

  constructor(private service: ExchangeRatesServiceService) {}

  loadRates(): void {
    this.service.getRates(this.from).subscribe(response => this.rates = response.rates);
  }

  ngOnInit(): void {
    this.loadRates();
  }

  convert(): number {
    return this.price * this.rates[this.to];
  }

}
