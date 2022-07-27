import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorValidateComponent } from '../components/error-validate/error-validate.component';
import { InputComponent } from '../components/form/input/input.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DialogModule,} from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { PaginationModule } from 'ngx-bootstrap/pagination'
import {MultiSelectModule} from 'primeng/multiselect';
@NgModule({
  declarations: [
    ErrorValidateComponent,
    InputComponent,
  ]
    ,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DialogModule,
    ButtonModule,
    PaginationModule,
  ],
  exports: [
    ErrorValidateComponent,
    InputComponent,
    DialogModule,
    ButtonModule,
    PaginationModule,
    FormsModule,
    ReactiveFormsModule,
    MultiSelectModule,
  ]
})
export class ShareModule { }
