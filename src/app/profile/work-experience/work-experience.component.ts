import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { CustomDialogModel } from '../../models/custom-dialog.model';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.scss'],
})
export class WorkExperienceComponent implements OnInit {

  updateWorkExperiencie!: FormGroup;
  dataModal: CustomDialogModel = {
    displayModal: false
  }
  loading: boolean = false;
  constructor(
    private translate: TranslateService,
  ) {
    this.updateWorkExperiencie = new FormGroup({
      roleName: new FormControl('', [Validators.required]),
      companyName: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      dateStart: new FormControl('', [Validators.required]),
      dateEnd: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit() { }
  onSubmit() {
    const textModal = this.translate.instant("actualizar_educacion_confirmacion");
    const typeModal = this.translate.instant("confirmacion");
    this.dataModal = {
      displayModal: true,
      textModal: textModal,
      iconModal: 'pi-exclamation-triangle',
      typeModal: typeModal
    }
  }
  confirmModal(event: boolean) {
    if (event) {
      if (this.updateWorkExperiencie.valid) {
        this.loading = true;

        this.loading = false;
        this.dataModal = {
          displayModal: true,
          textModal: this.translate.instant("actualizacion_educacion_correctamente"),
          iconModal: 'pi-check',
          typeModal: this.translate.instant("exito")
        }
      }
    }
  }
  clearForm() {
    this.updateWorkExperiencie.reset();
  }
  closeModal(event: boolean) {
    this.loading = false;
    if (event) {
      this.clearForm();
    }
  }
  get roleName() { return this.updateWorkExperiencie.get('roleName'); }
  get companyName() { return this.updateWorkExperiencie.get('companyName'); }
  get description() { return this.updateWorkExperiencie.get('description'); }
  get dateStart() { return this.updateWorkExperiencie.get('dateStart'); }
  get dateEnd() { return this.updateWorkExperiencie.get('dateEnd'); }
}
