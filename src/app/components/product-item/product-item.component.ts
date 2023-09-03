import { Component, Input } from '@angular/core';
import { Announcement } from 'src/app/models/announcement.model';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent {
  @Input() announcement: Announcement | null = null;
}
