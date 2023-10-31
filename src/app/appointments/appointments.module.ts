import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListAppointmentsComponent } from './list-appointments/list-appointments.component';
import { AppointmentsPageRoutingModule } from './appointments-routing.module';
import { TranslationModule } from '../components/translation/translation.module';
import { ButtonModule } from 'primeng/button';
import { IonicModule } from '@ionic/angular';
import { TagModule } from 'primeng/tag';

@NgModule({
  declarations: [ListAppointmentsComponent],
  imports: [
    CommonModule,
    TranslationModule,
    ButtonModule,
    IonicModule,
    AppointmentsPageRoutingModule,
    TagModule
  ],
})
export class AppointmentsModule { }
