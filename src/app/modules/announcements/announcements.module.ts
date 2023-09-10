import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecommendedComponent } from './pages/recommended/recommended.component';
import { AnnouncementsRoutingModule } from './announcements-routing.module';
import { ProductItemComponent } from 'src/app/shared/components/product-item/product-item.component';
import { AnnouncementComponent } from './pages/announcement/announcement.component';



@NgModule({
  declarations: [
    RecommendedComponent,
    ProductItemComponent,
    AnnouncementComponent,

  ],
  imports: [
    CommonModule,
    AnnouncementsRoutingModule

  ]
})
export class AnnouncementsModule { }
