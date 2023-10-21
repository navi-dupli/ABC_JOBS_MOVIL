import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterTechnicalTestComponent } from './register-technical-test/register-technical-test.component';

const routes: Routes = [
  {
    path: 're',
    component: RegisterTechnicalTestComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestPageRoutingModule {}
