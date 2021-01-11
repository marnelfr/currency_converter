import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.scss']
})
export class CurrencyComponent implements OnInit {

  rate = 1.74;
  from = 'USD';
  to = 'CAD';
  price = 2;


  constructor() { }

  ngOnInit(): void {
  }

  convert() {
    return this.price * this.rate;
  }

}
