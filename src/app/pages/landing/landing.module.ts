import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdvantagesComponent } from 'src/app/components/advantages/advantages.component';
import { DescriptionComponent } from 'src/app/components/description/description.component';
import { HistoryComponent } from 'src/app/components/history/history.component';
import { IntegrationsComponent } from 'src/app/components/integrations/integrations.component';
import { InviteComponent } from 'src/app/components/invite/invite.component';
import { MainComponent } from 'src/app/components/main/main.component';
import { OptionsComponent } from 'src/app/components/options/options.component';
import { ProductivityComponent } from 'src/app/components/productivity/productivity.component';
import { QualityComponent } from 'src/app/components/quality/quality.component';
import { StepsComponent } from 'src/app/components/steps/steps.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { LandingComponent } from './landing.component';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
  },
];
@NgModule({
  declarations: [
    MainComponent,
    QualityComponent,
    StepsComponent,
    AdvantagesComponent,
    HistoryComponent,
    OptionsComponent,
    IntegrationsComponent,
    DescriptionComponent,
    ProductivityComponent,
    InviteComponent,
    LandingComponent,
  ],
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
})
export class LandingModule {}
