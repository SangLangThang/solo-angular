import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DownloadComponent } from 'src/app/components/download/download.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { DonwloadsPageComponent } from './donwloads-page.component';

const routes: Routes = [
  {
    path: '',
    component: DonwloadsPageComponent,
  },
];
@NgModule({
  declarations: [DonwloadsPageComponent, DownloadComponent],
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
})
export class DonwloadsPageModule {}
