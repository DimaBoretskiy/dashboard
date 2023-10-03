import { Component, OnInit } from '@angular/core';
import { CategoryService } from '@services/category.service';
import { IExtendCategory } from 'src/app/core/models/extendCategory.model';
import { formatCategories } from 'src/app/core/utils/fomats';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  public categories: IExtendCategory[] = [];
  public isCategoriesOpened: boolean = false;

  constructor(private _categoryService: CategoryService) {}

  toggleCategories(): void {
    this.isCategoriesOpened = !this.isCategoriesOpened;
    if(this.isCategoriesOpened) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }

  ngOnInit() {
    this._categoryService.getCategories().subscribe((response) => {
      this.categories = formatCategories(response)
    });
  }
}
