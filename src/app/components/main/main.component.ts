import { Component, OnInit } from '@angular/core';
import { MAIN_PARTNERS } from './main.data';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  mainPartners = MAIN_PARTNERS;
  constructor() {}

  ngOnInit(): void {
  }
}
