import { Component, OnInit } from '@angular/core';
import { NAV } from './header.data';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  NAV = NAV;
  constructor() {}

  ngOnInit(): void {}
}
