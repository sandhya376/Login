import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input'; 
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field'; 
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox'; 
import {TextFieldModule} from '@angular/cdk/text-field'; 
import {MatSelectModule} from '@angular/material/select';




@NgModule({
  imports: [
    MatInputModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatRadioModule,
    MatCheckboxModule,
    TextFieldModule,
    MatSelectModule
     
  ],
  exports: [
    MatInputModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatRadioModule,
    MatCheckboxModule,
    TextFieldModule,
    MatSelectModule
       
    
  ],
})
export class MaterialModule {}