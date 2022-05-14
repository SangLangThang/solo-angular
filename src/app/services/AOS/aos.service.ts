import { Injectable, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Injectable({
  providedIn: 'root',
})
export class AosService implements OnInit {
  constructor() {}
  ngOnInit(): void {}

  initAOS() {
    AOS.init();
  }
}
