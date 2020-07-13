import { Component, OnInit } from '@angular/core';
import { RegisterModel } from '../models/register.model';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { FormControl } from '@angular/forms';
import { MatFormFieldControl } from '@angular/material/form-field'; 
import { MatInputModule } from '@angular/material/input';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register', 
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: RegisterModel = new RegisterModel();
  registerForm: FormGroup;
  hide = true;
  auth: any;
  


  constructor(
   private formBuilder: FormBuilder,
   private authService: AuthService,
   private router: Router
   ) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      'name': [this.user.name, [
        Validators.required
      ]],
      'email': [this.user.email, [
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
  onRegisterSubmit(){
  //alert(this.user.name + ' ' + this.user.email + ' ' + this.user.password);
this.authService.registerUser(this.user)
.subscribe(data => {
  if (data.success) {
  this.router.navigate(['/login']);
   } else {
     console.log('Failed');
  }
 });
}

/*registerUser() {
  this.auth.registerUser(this.user)
  .subscribe(
    res => console.log(res),
    err => console.log(err)
  )};*/
}



