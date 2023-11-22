import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { CustomDialogModel } from 'src/app/models/custom-dialog.model';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.scss'],
})
export class UpdateProfileComponent implements OnInit {

  candidate: any = {
    picture: "../../assets/images/avatar.png",
    names: "Juan",
    surnames: "Perez",
    identify: "2321321312",
    phone: "57 321321312",
    email: "qwerty@gmail.com",
    country: "Bogotá, Colombia"
  }
  education: any = [
    {
      title: "Ingeniero de sistemas",
      startDate: "2010",
      endDate: " 2021"
    },
    {
      title: "Maestro",
      startDate: "2010",
      endDate: " 2021"
    }
  ]

  langugesOptions: any = [
    {
      value: "Español"
    },
    {
      value: "Inlges"
    },
  ]
  profileSkills!: FormGroup;
  dataModal: CustomDialogModel = {
    displayModal: false
  }
  loading = false;
  constructor(
    private translate: TranslateService) {
    this.profileSkills = new FormGroup({
      languges: new FormControl('', [Validators.required]),
      skils: new FormControl('', [Validators.required]),
    });
  }

  onSubmit() {
    console.log("holaaa")
    const textModal = this.translate.instant("actualizar_habilidades_confirmacion");
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
      if (this.profileSkills.valid) {
        this.loading = true;
        let skilsAndLanguges = {
          languges: this.profileSkills.get("languges")?.value,
          skils: this.profileSkills.get("skils")?.value,
        }
        console.log(skilsAndLanguges);
        this.loading = false;
        this.dataModal = {
          displayModal: true,
          textModal: this.translate.instant("actualizacion_habilidades_correctamente"),
          iconModal: 'pi-check',
          typeModal: this.translate.instant("exito")
        }
      }
    }
  }
  clearForm() {
    this.profileSkills.reset();
  }
  closeModal(event: boolean) {
    this.loading = false;
    if (event) {
      this.clearForm();
    }
  }
  ngOnInit() {
    const hasReloaded = sessionStorage.getItem('hasReloaded');
    if (hasReloaded == "false") {
      window.location.reload();
      sessionStorage.setItem('hasReloaded', 'true');
    }
    const local = localStorage.getItem('currentUser');
    let currentUser: any;
    if (local !== null) {
      currentUser = JSON.parse(local);
    }
    console.log(currentUser);
  }

  get languges() { return this.profileSkills.get('languges'); }
  get skils() { return this.profileSkills.get('skils'); }
}
