import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { CustomDialogModel } from 'src/app/models/custom-dialog.model';

@Component({
  selector: 'app-update-education',
  templateUrl: './update-education.component.html',
  styleUrls: ['./update-education.component.scss'],
})
export class UpdateEducationComponent implements OnInit {
  updateEducation!: FormGroup;
  dataModal: CustomDialogModel = {
    displayModal: false
  }
  loading: boolean = false;
  uploadedFiles: any[] = [];
  multiple: boolean | undefined ;
  constructor(
    private translate: TranslateService,
  ) {
    this.multiple = true;
    this.updateEducation = new FormGroup({
      tittleName: new FormControl('', [Validators.required]),
      dateStart: new FormControl('', [Validators.required]),
      dateEnd: new FormControl('', [Validators.required]),
      certificate: new FormControl('', [Validators.required]),
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
      if (this.updateEducation.valid) {
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
    this.updateEducation.reset();
  }
  closeModal(event: boolean) {
    this.loading = false;
    if (event) {
      this.clearForm();
    }
  }
  onUpload(event: { files: any; }) {
    console.log("llegaaa")
    for (let file of event.files) {
      this.uploadedFiles.push(file);
    }

    console.log(this.uploadedFiles);
  }
  get tittleName() { return this.updateEducation.get('tittleName'); }
  get dateStart() { return this.updateEducation.get('dateStart'); }
  get dateEnd() { return this.updateEducation.get('dateEnd'); }
  get certificate() { return this.updateEducation.get('certificate'); }
}
