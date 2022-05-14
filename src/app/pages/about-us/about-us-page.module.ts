import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { AboutUsPageComponent } from './about-us-page.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {
    path: '',
    component: AboutUsPageComponent,
  },
];
@NgModule({
  declarations: [AboutUsPageComponent, AboutComponent],
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
})
export class AboutUsPageModule {}
