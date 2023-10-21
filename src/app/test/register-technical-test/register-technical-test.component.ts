import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TechnicalTestModel } from 'src/app/models/technical-test.model';

@Component({
  selector: 'app-register-technical-test',
  templateUrl: './register-technical-test.component.html',
  styleUrls: ['./register-technical-test.component.scss'],
})
export class RegisterTechnicalTestComponent implements OnInit {

  registerTechnicalTest!: FormGroup;
  technicalTestOptions!: TechnicalTestModel[];
  candidateOptions!: TechnicalTestModel[];
  stateOptions!: TechnicalTestModel[];
  constructor() { }

  ngOnInit() {
    this.registerTechnicalTest = new FormGroup({
      technicalTest: new FormControl('', [Validators.required]),
      candidate: new FormControl('', [Validators.required]),
      state: new FormControl('', [Validators.required]),
      qualification: new FormControl('', [Validators.required, Validators.maxLength(50)]),
      observations: new FormControl('', [Validators.required, Validators.maxLength(300)]),
    })
  }

  onSubmit() {}

  get technicalTest() { return this.registerTechnicalTest.get('technicalTest'); }
  get candidate() { return this.registerTechnicalTest.get('candidate'); }
  get state() { return this.registerTechnicalTest.get('state'); }
  get qualification() { return this.registerTechnicalTest.get('qualification'); }
  get observations() { return this.registerTechnicalTest.get('observations'); }
}
