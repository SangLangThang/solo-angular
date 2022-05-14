import { Component, OnInit } from '@angular/core';
import { PRICING_DATA } from './pricing.data';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss']
})
export class PricingComponent implements OnInit {
  pricingData = PRICING_DATA
  constructor() { }

  ngOnInit(): void {
  }

}
