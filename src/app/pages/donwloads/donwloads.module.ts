import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DownloadComponent } from 'src/app/components/download/download.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { DonwloadsComponent } from './donwloads.component';

const routes: Routes = [
  {
    path: '',
    component: DonwloadsComponent,
  },
];
@NgModule({
  declarations: [DonwloadsComponent, DownloadComponent],
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
})
export class DonwloadsModule {}
