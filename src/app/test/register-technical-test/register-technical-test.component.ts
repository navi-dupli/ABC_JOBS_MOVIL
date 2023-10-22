import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { CandidateModel } from 'src/app/models/candidate.model';
import { CustomDialogModel } from 'src/app/models/custom-dialog.model';
import { StateTechnicalTestModel, TechnicalTestModel } from 'src/app/models/technical-test.model';
import { CandidateService } from 'src/app/services/candidates/candidate.service';
import { TechnicalTestService } from 'src/app/services/test/technical-test.service';

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
        value: "APPROVED",
      },
      {
        state: "Reprobada",
        value: "FAILED",
      },
    ]
    this.registerTechnicalTest = new FormGroup({
      technicalTest: new FormControl('', [Validators.required]),
      candidate: new FormControl('', [Validators.required]),
      state: new FormControl('', [Validators.required]),
      qualification: new FormControl('', [Validators.required, Validators.maxLength(50)]),
      observations: new FormControl('', [Validators.required, Validators.maxLength(300)]),
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

  getCandidate() {
    this.candidateService.getCandidates().subscribe(result => {
      this.candidateOptions = result;
    });
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
