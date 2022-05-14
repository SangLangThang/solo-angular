import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { FeaturesPageComponent } from './features-page/features-page.component';
import { FeaturesComponent } from './features-page/features/features.component';
import { ShareComponent } from './features-page/share/share.component';
import { CommentComponent } from './features-page/comment/comment.component';
import { QuestionsComponent } from './features-page/questions/questions.component';
import { OfferComponent } from './features-page/offer/offer.component';
import { OptionsComponent } from './features-page/options/options.component';

const routes: Routes = [
  {
    path: '',
    component: FeaturesPageComponent,
  },
];
@NgModule({
  declarations: [FeaturesPageComponent, FeaturesComponent, ShareComponent, CommentComponent, QuestionsComponent, OfferComponent, OptionsComponent],
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
})
export class FeaturesPageModule {}
