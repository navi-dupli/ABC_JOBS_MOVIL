import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer.component';
import { IonicModule } from '@ionic/angular';
import { TranslationModule } from '../translation/translation.module';



@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    TranslationModule,
  ],
  declarations: [FooterComponent],
  exports: [FooterComponent],
})
export class FooterModule { }
