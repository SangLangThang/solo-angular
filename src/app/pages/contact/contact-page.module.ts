import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { ContactPageComponent } from './contact-page.component';

const routes: Routes = [
  {
    path: '',
    component: ContactPageComponent,
  },
];
@NgModule({
  declarations: [ContactPageComponent],
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
})
export class ContactPageModule {}
