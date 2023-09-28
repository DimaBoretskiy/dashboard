import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateAnnouncementComponent } from './pages/create-announcement/create-announcement.component';
import { CreateAnnouncementRoutingModule } from './create-announcement-routing.module';



@NgModule({
  declarations: [
    CreateAnnouncementComponent
  ],
  imports: [
    CommonModule,
    CreateAnnouncementRoutingModule
  ]
})
export class CreateAnnouncementModule { }
