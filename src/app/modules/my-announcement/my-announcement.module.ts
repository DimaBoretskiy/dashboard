import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyAnnouncementComponent } from './pages/my-announcement/my-announcement.component';
import { MyAnnouncementRoutingModule } from './my-announcement.routing';
import { ProductItemComponent } from 'src/app/shared/components/product-item/product-item.component';



@NgModule({
  declarations: [
    MyAnnouncementComponent,
    ProductItemComponent
  ],
  imports: [
    CommonModule,
    MyAnnouncementRoutingModule
  ]
})
export class MyAnnouncementModule { }
