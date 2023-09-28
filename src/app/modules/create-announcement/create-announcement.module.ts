import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateAnnouncementComponent } from './pages/create-announcement/create-announcement.component';
import { CreateAnnouncementRoutingModule } from './create-announcement-routing.module';

import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CreateAnnouncementComponent
  ],
  imports: [
    CommonModule,
    CreateAnnouncementRoutingModule,
    ReactiveFormsModule
  ]
})
export class CreateAnnouncementModule { }
