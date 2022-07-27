import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AreaDetailComponent } from './area/area-detail/area-detail.component';
import { AreaListComponent } from './area/area-list/area-list.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserListComponent } from './user/user-list/user-list.component';

const routes: Routes = [
  {path:'',pathMatch:'full',redirectTo:'user'},
  {path:'user',component:UserListComponent},
  {path:'report',component:UserDetailComponent},
  {path:'area',component:AreaListComponent},
  {
    path: 'area/:code',
    component: AreaDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
