import { Component, OnInit } from '@angular/core';
import { ABOUT_DATA } from './about.data';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  ABOUT_DATA = ABOUT_DATA
  constructor() { }

  ngOnInit(): void {
  }

}
