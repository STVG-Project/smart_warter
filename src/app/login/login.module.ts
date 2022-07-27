import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login-routing.module';
import { ComponentComponent } from './component/component.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ShareModule } from '../components/share.module'
@NgModule({
  declarations: [
    ComponentComponent,
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    ReactiveFormsModule,
    ShareModule
  ]
})
export class LoginModule { }
