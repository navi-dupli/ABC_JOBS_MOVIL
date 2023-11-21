import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationModule } from '../components/translation/translation.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { CustomDialogModule } from '../components/custom-dialog/custom-dialog.module';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { ProgressBarModule } from 'primeng/progressbar';
import { AddCandidateTeamComponent } from './add-candidate-team/add-candidate-team.component';
import { AddCandidateTeamRoutingModule } from './add-candidate-team-routing.module';
import { MultiSelectModule } from 'primeng/multiselect';
import { FooterModule } from '../components/footer/footer.module';

@NgModule({
  declarations: [AddCandidateTeamComponent],
  imports: [
    TranslationModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DropdownModule,
    InputTextModule,
    IonicModule,
    RouterModule,
    ButtonModule,
    CustomDialogModule,
    ProgressBarModule,
    FooterModule,
    MultiSelectModule,
    AddCandidateTeamRoutingModule
  ],
  exports: [AddCandidateTeamComponent]
})
export class AddCandidateTeamModule { }
