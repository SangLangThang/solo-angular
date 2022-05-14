import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FaqComponent } from 'src/app/components/faq/faq.component';
import { PricingComponent } from 'src/app/components/pricing/pricing.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { PricingPageComponent } from './pricing-page.component';

const routes: Routes = [
  {
    path: '',
    component: PricingPageComponent,
  },
];
@NgModule({
  declarations: [PricingPageComponent, PricingComponent, FaqComponent],
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
})
export class PricingPageModule {}
