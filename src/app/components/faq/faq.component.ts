import { Component, OnInit } from '@angular/core';
import { FAQ_DATA_BASIC, FAQ_DATA_PLAN, FAQ_DATA_PRIVACY, FAQ_DATA_USING, I_FAQ_DATA } from './faq.data';
@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss'],
})
export class FaqComponent implements OnInit {
  constructor() {}
  collapsing = true;
  FAQ_DATA_BASIC: I_FAQ_DATA = FAQ_DATA_BASIC;
  FAQ_DATA_PLAN: I_FAQ_DATA = FAQ_DATA_PLAN;
  FAQ_DATA_USING: I_FAQ_DATA = FAQ_DATA_USING;
  FAQ_DATA_PRIVACY: I_FAQ_DATA = FAQ_DATA_PRIVACY;
  ngOnInit(): void {}
}
