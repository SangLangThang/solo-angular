import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./landing/landing-page.module').then(
        (mod) => mod.LandingPageModule
      ),
  },
  {
    path: 'downloads',
    loadChildren: () =>
      import('./donwloads/donwloads-page.module').then(
        (mod) => mod.DonwloadsPageModule
      ),
  },
  {
    path: 'pricing',
    loadChildren: () =>
      import('./pricing/pricing-page.module').then(
        (mod) => mod.PricingPageModule
      ),
  },
  {
    path: 'features',
    loadChildren: () =>
      import('./features/features-page.module').then(
        (mod) => mod.FeaturesPageModule
      ),
  },
  {
    path: 'about-us',
    loadChildren: () =>
      import('./about-us/about-us-page.module').then(
        (mod) => mod.AboutUsPageModule
      ),
  },
  {
    path: 'contact',
    loadChildren: () =>
      import('./contact/contact-page.module').then(
        (mod) => mod.ContactPageModule
      ),
  },
];
@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class PagesModule {}
