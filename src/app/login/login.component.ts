import { Component, OnInit } from '@angular/core';
import { LoginModel } from '../models/login.model';
import { FormGroup, FormBuilder } from '@angular/forms';
import { FormControl, Validators } from '@angular/forms';
import { MatFormFieldControl} from '@angular/material/form-field'; 
import { MatInputModule } from '@angular/material/input'; 
import { AuthService } from '../service/auth.service';
import { LoginService } from '../service/login.service'; 
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  user: LoginModel = new LoginModel();
  loginForm: FormGroup;
  hide = true;
  auth: any;
  loginUserData: any;

  constructor(
    private formBuilder: FormBuilder, 
    private authService: AuthService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      'email': [this.user.email,[
        Validators.required,
        Validators.email
      ]],
      'password': [this.user.password,[
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(30)
      ]],
          
    })
    
  }

 
 onLoginSubmit(){
  //alert(this.user.email + ' '+ this.user.password);
  this.authService.authenticateUser(this.user)
  .subscribe(data => {
    if (data.success) {
    this.router.navigate(['/register']);
     } else {
       console.log('Failed');
    }
   });
}

loginUser() {
  this.auth.loginUser(this.loginUserData) 
  .subscribe (
    res => console.log(res),
    err => console.log(err)
  )};
}
