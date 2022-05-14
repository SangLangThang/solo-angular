import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  currentTheme = new BehaviorSubject<string>('light');
  constructor() {}

  changeTheme() {
    this.currentTheme.getValue() === 'light' ?  this.currentTheme.next('dark') : this.currentTheme.next('light');
  }
}
