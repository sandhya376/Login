import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './service/auth.service';
import { AuthGuard } from './service/auth.guard';

import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input'; 
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field'; 
import {MatRadioModule} from '@angular/material/radio'; 
import {MatDatepickerModule} from '@angular/material/datepicker'; 

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RegisterComponent } from './register/register.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { AppHttpService } from './service/app-http.service';
import { HttpModule } from '@angular/http';
import {MatCheckboxModule} from '@angular/material/checkbox'; 
import {TextFieldModule} from '@angular/cdk/text-field'; 


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    NavBarComponent,
    RegisterComponent,
    ForgotpasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatRadioModule,
    MatDatepickerModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatInputModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    HttpModule,
    MatCheckboxModule,
    TextFieldModule,
   
    

  ],
  providers: [AuthService, AuthGuard, AppHttpService],
   

  bootstrap: [AppComponent]
})
export class AppModule { }
