import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogModule } from 'primeng/dialog';
import { CustomDialogComponent } from './custom-dialog.component';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [CustomDialogComponent],
  imports: [DialogModule, ButtonModule, CommonModule],
})
export class CustomDialogModule {}
