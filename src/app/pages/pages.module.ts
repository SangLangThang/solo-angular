import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';
const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./landing/landing.module').then((mod) => mod.LandingModule),
  },
  {
    path: 'downloads',
    loadChildren: () =>
      import('./donwloads/donwloads.module').then((mod) => mod.DonwloadsModule),
  },
  {
    path: 'pricing',
    loadChildren: () =>
      import('./pricing/pricing-page.module').then((mod) => mod.PricingPageModule),
  },
  {
    path: 'features',
    loadChildren: () =>
      import('./features/features-page.module').then((mod) => mod.FeaturesPageModule),
  },
];
@NgModule({
  declarations: [
    AboutUsComponent,
    ContactComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class PagesModule {}
