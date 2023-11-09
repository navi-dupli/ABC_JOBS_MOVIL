import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterTechnicalTestComponent } from './register-technical-test/register-technical-test.component';
import { TestPageRoutingModule } from './test-routing.module';
import { TranslationModule } from '../components/translation/translation.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { CustomDialogModule } from '../components/custom-dialog/custom-dialog.module';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { ProgressBarModule } from 'primeng/progressbar';
import { FooterModule } from '../components/footer/footer.module';

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
    RouterModule,
    ButtonModule,
    FooterModule,
    CustomDialogModule,
    ProgressBarModule
  ],
  exports: [RegisterTechnicalTestComponent]
})
export class TestModule { }
