import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwiperModule } from 'swiper/angular';
import { NgForRepeatDirective } from './directives/ng-for-repeat.directive';
import { ReviewComponent } from '../components/review/review.component';
import { AccordionModule } from '../accordion/accordion.module';
@NgModule({
  declarations: [ReviewComponent, NgForRepeatDirective],
  imports: [CommonModule, SwiperModule, AccordionModule],
  exports: [ReviewComponent, SwiperModule,NgForRepeatDirective, AccordionModule],
})
export class SharedModule {}
