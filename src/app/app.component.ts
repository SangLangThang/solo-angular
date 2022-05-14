import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AosService } from './services/AOS/aos.service';
import { ThemeService } from './services/theme/theme.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(
    public AosService: AosService,
    private themeService: ThemeService
  ) {}
  currentTheme = ''
  ngOnInit(): void {
    this.AosService.initAOS();
    this.themeService.currentTheme.subscribe( theme =>{
      this.currentTheme = theme
    })
  }
}
