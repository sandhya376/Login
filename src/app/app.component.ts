import { Component } from '@angular/core';
import {FormGroup, Validators} from '@angular/forms';
import {FormControl} from '@angular/forms';
import { AuthService } from './service/auth.service';
import { environment } from './../environments/environment';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  /*email = new FormControl('');

  updateEmail()  {
    this.email.setValue('test@testdomain.com');
  }

  userregisterForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''), 

  });

  onSubmit() {
    TODO: Use EventEmitter with form value
    console.warn(this.userregisterForm.value);

     console.log(this.userregisterForm.controls['firstName'].value); 
     console.log(this.userregisterForm.get('firstName').value); 
     
  }*/
title = 'Loginpage';
}
