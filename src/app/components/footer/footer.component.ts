import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/services/theme/theme.service';
import { NAV } from '../header/header.data';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  constructor(private themeService: ThemeService) {}
  NAV = NAV;
  ngOnInit(): void {}

  changeTheme() {
    this.themeService.changeTheme();
  }
}
