import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from '../guard/auth-guard.service';
import { AddCandidateTeamComponent } from './add-candidate-team/add-candidate-team.component';

const routes: Routes = [
  {
    path: 'asignar-candidato-equipo',
    component: AddCandidateTeamComponent,
    canActivate: [AuthGuardService],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddCandidateTeamRoutingModule {}
