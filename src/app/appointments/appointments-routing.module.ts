import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from '../guard/auth-guard.service';
import { ListAppointmentsComponent } from './list-appointments/list-appointments.component';

const routes: Routes = [
  {
    path: 'listar-citas',
    component: ListAppointmentsComponent,
    canActivate: [AuthGuardService],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppointmentsPageRoutingModule { }
