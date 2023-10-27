import {
  CUSTOM_ELEMENTS_SCHEMA,
  NgModule,
  NO_ERRORS_SCHEMA,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { CheckboxModule } from 'primeng/checkbox';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';
import { LoginRoutingModule } from './login-routing.module';
import { CustomDialogModule } from '../../components/custom-dialog/custom-dialog.module';
import { SelectLanguageModule } from '../../components/select-language/select-language.module'
import { ScrollTopModule } from 'primeng/scrolltop';
import { TranslationModule } from 'src/app/components/translation/translation.module';
import { ProgressBarModule } from 'primeng/progressbar';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    ButtonModule,
    FormsModule,
    InputTextModule,
    PasswordModule,
    CheckboxModule,
    ReactiveFormsModule,
    LoginRoutingModule,
    CustomDialogModule,
    ScrollTopModule,
    TranslationModule,
    SelectLanguageModule,
    ProgressBarModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
  providers: [AuthService]
})
export class LoginModule {}
