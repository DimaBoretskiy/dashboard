import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IUser } from 'src/app/core/models/user.model';
const form = {
  name: '123'
}
@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  settingsForm!: FormGroup 
  user!: IUser 
  passwordForm!: FormGroup
  constructor() {

    this.passwordForm = new FormGroup({
      
      password: new FormControl<string | null>(null,Validators.required),
      newPassword: new FormControl<string | null>(null,Validators.required),
    });

  }
  onChangeSettings(){
    console.log(this.settingsForm.value)
  }
  onChangePassword() {
    console.log(this.passwordForm.value)
  }
  ngOnInit() {
    this.user = { 
      name: 'dima',
      phone: '7 999 999-99-99',
    }
    this.settingsForm = new FormGroup({
      
      name: new FormControl<string | null>(this.user.name),
      phone: new FormControl<string | null>(this.user.phone),
      location:new FormControl<string | null>(this.user.location ?? 'Не указан'),
    });
  }
}
  
