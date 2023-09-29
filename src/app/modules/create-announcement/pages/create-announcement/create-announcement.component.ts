import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CategoryService } from '@services/category.service';
import { TreeNode } from 'primeng/api';
import { FileSelectEvent } from 'primeng/fileupload';
import { ICategory } from 'src/app/core/models/category.modules';

@Component({
  selector: 'app-create-announcement',
  templateUrl: './create-announcement.component.html',
  styleUrls: ['./create-announcement.component.scss']
})

export class CreateAnnouncementComponent implements OnInit{
//добавил переменную/поле с типом FormGroup
  createForm!: FormGroup 
  
  categoriesData!: ICategory[] 
  images = new Set<File>();
  categories!: TreeNode[];
  constructor( private _categoryService: CategoryService) {
    this.createForm = new FormGroup({
      
      name: new FormControl<string | null>(null, Validators.required),
      desc: new FormControl<string | null>(
        null,
        [Validators.maxLength(250),
        Validators.required]
      ),
      category: new FormControl<TreeNode | null>(null, Validators.required),
      price: new FormControl<number>(0, Validators.min(0)),
      location:new FormControl<string | null>(null, Validators.required),
    });
  }
  //добавил метод/функцию которая срабатывает при Submit формы
  onSubmit() {
    console.log(this.createForm.value)
    console.log(this.images)
  }

  onImageSelect(imagesToSelect: FileSelectEvent) {
    for (let image of imagesToSelect.files) {
      if (!this.images.has(image)) {
        this.images.add(image);
      }
    }
  }

  onImageRemove(imageToDelete: { file: File }) {
    this.images.delete(imageToDelete.file);
  }
  ngOnInit(): void {
    this._categoryService.getCategories().subscribe((categories) => {
     this.categoriesData = categories
      this.categories = categories.map((item: ICategory)=>{
        return  {
          label: item.name,
          key: item.name
        }
      })
    });
  }

}
