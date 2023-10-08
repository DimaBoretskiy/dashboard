import { HttpClient } from '@angular/common/http';
import { Component, Input, NgModule, OnInit } from '@angular/core';
import { ImagesService } from '@services/images/images.service';
import { IAnnouncement } from 'src/app/core/models/announcement.model';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
  @Input() announcement: IAnnouncement | null = null;
  image!: string | null 
  constructor (private _imageService: ImagesService){
    
  }
  ngOnInit(): void {
    this.image = this.announcement?.imagesIds[0] ?  this._imageService.getImageUrl(this.announcement?.imagesIds[0]) : null
  }
 
}

@NgModule({
  declarations: [ProductItemComponent],
  exports: [ProductItemComponent],
  imports: [],
})

export class ProductsItemComponentModule {

}