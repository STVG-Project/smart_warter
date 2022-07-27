import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareModule } from '../components/share.module'
import { HomeRoutingModule } from './home-routing.module';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  DxButtonModule,
  DxChartModule,
  DxDataGridModule,
  DxDateBoxModule,
  DxDropDownButtonModule,
  DxPivotGridModule,
  DxPopupModule,
  DxSelectBoxModule,
  DxTemplateModule,
  DxToolbarModule,
  
} from 'devextreme-angular';
import { AreaListComponent } from './area/area-list/area-list.component';
import { AreaDetailComponent } from './area/area-detail/area-detail.component';
import { AreaCardComponent } from './area/area-card/area-card.component'


@NgModule({
  declarations: [

    UserListComponent,
    UserDetailComponent,
    NavbarComponent,
    AreaListComponent,
    AreaDetailComponent,
    AreaCardComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ShareModule,
    DxButtonModule,
    DxChartModule,
    DxDataGridModule,
    DxDateBoxModule,
    DxDropDownButtonModule,
    DxPivotGridModule,
    DxPopupModule,
    DxSelectBoxModule,
    DxTemplateModule,
    DxToolbarModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class HomeModule { }
