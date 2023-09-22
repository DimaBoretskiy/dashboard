import { Component, Input, NgModule } from '@angular/core';
import { Announcement } from 'src/app/core/models/announcement.model';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent {
  @Input() announcement: Announcement | null = null;
}

@NgModule({
  declarations: [ProductItemComponent],
  exports: [ProductItemComponent],
  imports: [],
})

export class ProductsItemComponentModule {

}