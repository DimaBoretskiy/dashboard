import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TreeNode } from 'primeng/api';
import { FileSelectEvent } from 'primeng/fileupload';

@Component({
  selector: 'app-create-announcement',
  templateUrl: './create-announcement.component.html',
  styleUrls: ['./create-announcement.component.scss']
})

export class CreateAnnouncementComponent {
//добавил переменную/поле с типом FormGroup
  createForm!: FormGroup 
  categories!: TreeNode[] 
  images = new Set<File>();

  constructor() {
    this.categories = [{label:'Автомобили',key:'auto'}]
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
 

}
