import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListAppointmentsComponent } from './list-appointments/list-appointments.component';
import { AppointmentsPageRoutingModule } from './appointments-routing.module';
import { TranslationModule } from '../components/translation/translation.module';
import { ButtonModule } from 'primeng/button';
import { IonicModule } from '@ionic/angular';
import { TagModule } from 'primeng/tag';
import { InterviewDetailComponent } from './interview-detail/interview-detail.component';
import { RouterModule } from '@angular/router';
import { FooterModule } from '../components/footer/footer.module';
import { FieldsetModule } from 'primeng/fieldset';

@NgModule({
  declarations: [ListAppointmentsComponent, InterviewDetailComponent],
  imports: [
    CommonModule,
    TranslationModule,
    ButtonModule,
    IonicModule,
    RouterModule,
    FooterModule,
    FieldsetModule,
    AppointmentsPageRoutingModule,
    TagModule,
  ],
})
export class AppointmentsModule { }
