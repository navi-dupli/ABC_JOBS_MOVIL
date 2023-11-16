import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from '../guard/auth-guard.service';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { UpdateEducationComponent } from './update-education/update-education.component';

const routes: Routes = [
  {
    path: 'completar-perfil',
    component: UpdateProfileComponent,
    //canActivate: [AuthGuardService],
  },{
    path: 'actualizar-educacion',
    component: UpdateEducationComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
