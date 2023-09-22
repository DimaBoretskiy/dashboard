import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyAnnouncementComponent } from './pages/my-announcement/my-announcement.component';
import { MyAnnouncementRoutingModule } from './my-announcement.routing';
import { ProductsItemComponentModule } from 'src/app/shared/components/product-item/product-item.component';



@NgModule({
  declarations: [
    MyAnnouncementComponent,
  ],
  imports: [
    CommonModule,
    MyAnnouncementRoutingModule,
    ProductsItemComponentModule
  ]
})
export class MyAnnouncementModule { }
