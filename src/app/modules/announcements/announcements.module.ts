import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecommendedComponent } from './pages/recommended/recommended.component';
import { AnnouncementsRoutingModule } from './announcements-routing.module';
import { AnnouncementComponent } from './pages/announcement/announcement.component';
import { ProductsItemComponentModule } from 'src/app/shared/components/product-item/product-item.component';

@NgModule({
  declarations: [
    RecommendedComponent,
    AnnouncementComponent,
  ],
  imports: [
    CommonModule,
    AnnouncementsRoutingModule,
    ProductsItemComponentModule,
  ]
})
export class AnnouncementsModule { }
