import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { ProfileRoutingModule } from './profile-routing.module';
import { TranslationModule } from '../components/translation/translation.module';
import { IonicModule } from '@ionic/angular';
import { FooterModule } from '../components/footer/footer.module';
import { MultiSelectModule } from 'primeng/multiselect';
import { ProgressBarModule } from 'primeng/progressbar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { UpdateEducationComponent } from './update-education/update-education.component';
import { CustomDialogModule } from '../components/custom-dialog/custom-dialog.module';
import { CalendarModule } from 'primeng/calendar';
import { InputTextModule } from 'primeng/inputtext';
import { FileUploadModule } from 'primeng/fileupload';
import { WorkExperienceComponent } from './work-experience/work-experience.component';

@NgModule({
  declarations: [UpdateProfileComponent, UpdateEducationComponent, WorkExperienceComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    TranslationModule,
    ButtonModule,
    IonicModule,
    FooterModule,
    ProgressBarModule,
    MultiSelectModule,
    CustomDialogModule,
    CalendarModule,
    InputTextModule,
    FileUploadModule
  ], exports: [UpdateProfileComponent, UpdateEducationComponent, WorkExperienceComponent]
})
export class ProfileModule { }
