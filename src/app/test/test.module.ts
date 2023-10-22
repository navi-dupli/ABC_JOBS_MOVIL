import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterTechnicalTestComponent } from './register-technical-test/register-technical-test.component';
import { TestPageRoutingModule } from './test-routing.module';
import { TranslationModule } from '../components/translation/translation.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { IonicModule } from '@ionic/angular';
import { CustomDialogModule } from '../components/custom-dialog/custom-dialog.module';

@NgModule({
  declarations: [RegisterTechnicalTestComponent],
  imports: [
    TranslationModule,
    CommonModule,
    TestPageRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DropdownModule,
    InputTextModule,
    IonicModule,
    ButtonModule,
    CustomDialogModule
  ],
  exports: [RegisterTechnicalTestComponent]
})
export class TestModule { }
