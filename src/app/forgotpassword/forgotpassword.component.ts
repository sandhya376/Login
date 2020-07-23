import { Component, OnInit } from '@angular/core';
import { forgotpasswordModel } from '../models/forgotpassword.model';
import { FormGroup, FormBuilder, FormControl,Validators} from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field'; 
import { MatFormFieldControl } from '@angular/material/form-field'; 
import { MatInputModule } from '@angular/material/input';
import { AuthService } from '../service/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { takeUntil } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {

  user: forgotpasswordModel = new forgotpasswordModel();
  forgotpasswordForm: FormGroup;
  email: any;
  auth: any;
  

  constructor(
    private formBuilder: FormBuilder, 
    private authService: AuthService,
    private router: Router,
    private activatedRoute: ActivatedRoute,

  ) { }

  ngOnInit(): void {
    this.forgotpasswordForm = this.formBuilder.group({
      'email': [this.user.email,[
        Validators.required,
        Validators.email
      ]],
    })
  
  }
  onForgotpasswordSubmit() { 
    if (!this.email) { 
      alert('We have sent a password reset link to the email address of the account that you specified.Please check your email for this message, then click on the link.'); 
    }
    this.auth.ForgotpasswordInit(this.email) 
    .then(
      () => alert('We have sent a password reset link to the email address of the account that you specified.Please check your email for this message, then click on the link.'), 
      (rejectionReason) => alert(rejectionReason)) 
    .catch(e => alert('An error occurred while attempting to your password')); 
  }

  
/*onForgotpasswordSubmit(){
   //alert(this.user.email);
  this.authService.authenticateUser(this.user)
  .subscribe(data => {
    if (data.success) {
    this.router.navigate(['/forgotpassword']);
     } else {
       console.log('Failed');
    }
   });*/
  
  }