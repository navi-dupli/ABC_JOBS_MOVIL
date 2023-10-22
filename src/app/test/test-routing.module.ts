import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterTechnicalTestComponent } from './register-technical-test/register-technical-test.component';
import { AuthGuardService } from '../guard/auth-guard.service';

const routes: Routes = [
  {
    path: 'registar-resultado-prueba-tecnica',
    component: RegisterTechnicalTestComponent,
    canActivate: [AuthGuardService],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestPageRoutingModule {}
