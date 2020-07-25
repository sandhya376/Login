import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import { ConfirmedValidator } from './../confirmed.validator';

@Component({
  selector: 'app-newpassword',
  templateUrl: './newpassword.component.html',
  styleUrls: ['./newpassword.component.css']
})
export class NewpasswordComponent implements OnInit {

  form: FormGroup = new FormGroup({});

  
  constructor(private fb: FormBuilder) { 

  this.form = fb.group({

    password: ['', [Validators.required]],

    confirm_password: ['', [Validators.required]]

  }, { 

    validator: ConfirmedValidator('password', 'confirm_password')

  })

}
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }
get f(){
  return this.form.controls;
}
submit(){

  console.log(this.form.value);

} 

}