import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { CandidateModel } from '../../models/candidate.model';
import { CustomDialogModel } from '../../models/custom-dialog.model';
import { ResultTechnicalTestModel, StateTechnicalTestModel, TechnicalTestModel } from 'src/app/models/technical-test.model';
import { CandidateService } from '../../services/candidates/candidate.service';
import { TechnicalTestService } from '../../services/test/technical-test.service';

@Component({
  selector: 'app-register-technical-test',
  templateUrl: './register-technical-test.component.html',
  styleUrls: ['./register-technical-test.component.scss'],
})
export class RegisterTechnicalTestComponent implements OnInit {

  registerTechnicalTest!: FormGroup;
  technicalTestOptions!: TechnicalTestModel[];
  candidateOptions!: CandidateModel[];
  stateOptions!: StateTechnicalTestModel[];
  dataModal: CustomDialogModel = {
    displayModal: false
  }
  constructor(private candidateService: CandidateService,
    private technicalTestService: TechnicalTestService,
    private translate: TranslateService) { }

  ngOnInit() {
    this.getCandidate();
    this.getTechnicalTest();
    this.stateOptions = [
      {
        state: "Aprobada",
        value: "aprobada",
      },
      {
        state: "Reprobada",
        value: "fallida",
      },
    ]
    this.registerTechnicalTest = new FormGroup({
      technicalTest: new FormControl('', [Validators.required]),
      candidate: new FormControl('', [Validators.required]),
      state: new FormControl('', [Validators.required]),
      qualification: new FormControl('', [Validators.required, Validators.min(0), Validators.max(10),Validators.pattern(/^[0-9]*(\.[0-9]+)?$/),]),
      observations: new FormControl('', [Validators.required, Validators.maxLength(500)]),
    })
  }

  onSubmit() {
    const textModal = this.translate.instant("confirma_registar_resultados_prueba_tecnica");
    this.dataModal = {
      displayModal: true,
      textModal: textModal,
      iconModal: 'pi-exclamation-triangle',
      typeModal: 'Confirmación'
    }
  }

  confirmModal(event: boolean) {
    if (event) {
      const local = localStorage.getItem('currentUser');
      let currentUser: any;
      if (local !== null) {
        currentUser = JSON.parse(local);
      }
      let form: ResultTechnicalTestModel = {
        observations: this.registerTechnicalTest.get("observations")?.value,
        qualify: this.registerTechnicalTest.get("qualification")?.value,
        qualifying_user_id: this.registerTechnicalTest.get("candidate")?.value,
        state: this.registerTechnicalTest.get("state")?.value,
        test_id: this.registerTechnicalTest.get("technicalTest")?.value,
        user_id: currentUser.id
      }
      this.technicalTestService.registerResultTechnicalTest(form).subscribe({
        next: (result) => {
          if (result) {
            const textModal = this.translate.instant("resultado_prueba_tecnica_almacenado_con_exito");
            this.dataModal = {
              displayModal: true,
              textModal: textModal,
              iconModal: 'pi-check',
              typeModal: 'Éxito'
            }
          }
        },
        error: (e) => {
          console.log(e)
          if (e.status === 400) {
            this.dataModal = {
              displayModal: true,
              textModal: e.error.message,
              iconModal: 'pi-exclamation-circle',
              typeModal: 'Error'
            }
          } else {
            const textModal = this.translate.instant("error_almacenandoo_resultado_prueba_tecnica");
            this.dataModal = {
              displayModal: true,
              textModal: textModal,
              iconModal: 'pi-exclamation-circle',
              typeModal: 'Error'
            }
          }
        }
      });
    }
  }

  getCandidate() {
    this.candidateService.getCandidates().subscribe(result => {
      this.candidateOptions = result;
      for (let index = 0; index < this.candidateOptions.length; index++) {
        let candidate = this.candidateOptions[index];
        this.candidateOptions[index].totalName = candidate.names + " " + candidate.surnames;
      }
    });
  }

  closeModal(event: boolean) {
    if (event) {
      this.clearForm();
    }
  }

  clearForm() {
    this.registerTechnicalTest.reset();
  }

  getTechnicalTest() {
    this.technicalTestService.getTechnicalTest().subscribe(result => {
      this.technicalTestOptions = result;
    });
  }


  get technicalTest() { return this.registerTechnicalTest.get('technicalTest'); }
  get candidate() { return this.registerTechnicalTest.get('candidate'); }
  get state() { return this.registerTechnicalTest.get('state'); }
  get qualification() { return this.registerTechnicalTest.get('qualification'); }
  get observations() { return this.registerTechnicalTest.get('observations'); }
}
