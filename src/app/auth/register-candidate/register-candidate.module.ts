import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { CheckboxModule } from 'primeng/checkbox';
import { SelectLanguageModule } from 'src/app/components/select-language/select-language.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CustomDialogModule } from 'src/app/components/custom-dialog/custom-dialog.module';
import { TranslationModule } from 'src/app/components/translation/translation.module';
import { ProgressBarModule } from 'primeng/progressbar';
import { RegisterCandidateComponent } from './register-candidate.component';
import { RegisterCandidateRoutingModule } from './register-candidate-routing.module';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { FooterModule } from 'src/app/components/footer/footer.module';

@NgModule({
    imports: [
        CommonModule,
		FormsModule,
		InputTextModule,
		ButtonModule,
        PasswordModule,
        CheckboxModule,
        SelectLanguageModule,
        ReactiveFormsModule,
        CustomDialogModule,
        TranslationModule,
        ProgressBarModule,
        DropdownModule,
        CalendarModule,
        RegisterCandidateRoutingModule,
        FooterModule
    ],
    declarations: [RegisterCandidateComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class RegisterCandidateModule { }
