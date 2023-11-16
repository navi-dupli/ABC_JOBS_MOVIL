import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { CustomDialogModel } from 'src/app/models/custom-dialog.model';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.scss'],
})
export class UpdateProfileComponent  implements OnInit {

  candidate: any = {
    picture:"../../assets/images/avatar.png",
    names: "Juan",
    surnames:"Perez",
    identify:"2321321312",
    phone:"57 321321312",
    email:"qwerty@gmail.com",
    country:"Bogotá, Colombia"
  } 
  langugesOptions : any = ["Español"]
  profileSkills!: FormGroup;
  dataModal: CustomDialogModel = {
    displayModal: false
  }
  loading = false;
  constructor(
    private translate: TranslateService) {
      this.profileSkills = new FormGroup({
        languges: new FormControl('', [Validators.required]),
      });
     }

  onSubmit() {
    const textModal = this.translate.instant("asignar_candidatos_confirmacion");
    const typeModal = this.translate.instant("confirmacion");
    this.dataModal = {
      displayModal: true,
      textModal: textModal,
      iconModal: 'pi-exclamation-triangle',
      typeModal: typeModal
    }
  }
  ngOnInit() {}

  get languges() { return this.profileSkills.get('languges'); }
}
