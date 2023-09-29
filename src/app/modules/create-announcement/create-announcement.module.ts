import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateAnnouncementComponent } from './pages/create-announcement/create-announcement.component';
import { CreateAnnouncementRoutingModule } from './create-announcement-routing.module';

import { ReactiveFormsModule } from '@angular/forms';
import { TreeSelectModule } from 'primeng/treeselect';
import { FileUploadModule } from 'primeng/fileupload';
import { NgIf } from '@angular/common';
import { InputNumberModule } from 'primeng/inputnumber';


@NgModule({
  declarations: [
    CreateAnnouncementComponent
  ],
  imports: [
    CommonModule,
    CreateAnnouncementRoutingModule,
    ReactiveFormsModule,
    TreeSelectModule,
    FileUploadModule,
    NgIf,
    InputNumberModule
  ]
})
export class CreateAnnouncementModule { }
