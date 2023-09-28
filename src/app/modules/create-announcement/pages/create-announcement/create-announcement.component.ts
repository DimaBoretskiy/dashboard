import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-create-announcement',
  templateUrl: './create-announcement.component.html',
  styleUrls: ['./create-announcement.component.scss']
})

export class CreateAnnouncementComponent {
//добавил переменную/поле с типом FormGroup
  createForm!: FormGroup 


  constructor() {
    this.createForm = new FormGroup({
      
      name: new FormControl<string | null>(null, Validators.required),
      desc: new FormControl<string | null>(
        null,
        Validators.maxLength(250)
      ),
      
    });
  }
  //добавил метод/функцию которая срабатывает при Submit формы
  onSubmit() {
    console.log(this.createForm.value)
  }

 

}
