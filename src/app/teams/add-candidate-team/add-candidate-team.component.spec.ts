import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { CandidateService } from '../../services/candidates/candidate.service';
import { TechnicalTestService } from '../../services/test/technical-test.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CustomDialogModule } from '../../components/custom-dialog/custom-dialog.module';
import { TranslationModule } from '../../components/translation/translation.module';
import { of, throwError } from 'rxjs';
import { AddCandidateTeamComponent } from './add-candidate-team.component';

describe('AddCandidateTeamComponent', () => {
  let component: AddCandidateTeamComponent;
  let fixture: ComponentFixture<AddCandidateTeamComponent>;
  let candidateService: CandidateService;
  let technicalTestService: TechnicalTestService
  const currentUser = { access_token: 'your-access-token' };
  localStorage.setItem('currentUser', JSON.stringify(currentUser));

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddCandidateTeamComponent],
      imports: [HttpClientTestingModule, TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useValue: {
            getTranslation: (lang: string) => {
              return of({ 'confirma_registar_resultados_prueba_tecnica': '¿Desea registrar el resultado de una prueba técnica?' });
            }
          }
        }
      }),
        CustomDialogModule, TranslationModule],
      providers: [CandidateService, TechnicalTestService]
    }).compileComponents();

    fixture = TestBed.createComponent(AddCandidateTeamComponent);
    candidateService = TestBed.inject(CandidateService);
    technicalTestService = TestBed.inject(TechnicalTestService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call confirmModal and set dataModal on success', () => {
    const testFormValue = {
      observations: 'Observation',
      qualification: 90,
      candidate: 1,
      state: 'Pass',
      technicalTest: 2
    };

    const mockResponse = true;
    jest.spyOn(technicalTestService, 'registerResultTechnicalTest').mockReturnValue(of(mockResponse));

    component.registerTechnicalTest.setValue(testFormValue);

    component.confirmModal(true);

    expect(component.dataModal.displayModal).toBe(true);
  });

  it('should call confirmModal and set dataModal on error with status 400', () => {
    const testFormValue = {
      observations: 'Observation',
      qualification: 90,
      candidate: 1,
      state: 'Pass',
      technicalTest: 2
    };

    const mockError = {
      status: 400,
      error: { message: 'Validation error' }
    };

    jest.spyOn(technicalTestService, 'registerResultTechnicalTest').mockReturnValue(throwError(mockError));

    component.registerTechnicalTest.setValue(testFormValue);

    component.confirmModal(true);

    expect(component.dataModal.displayModal).toBe(true);
  });

  it('should call confirmModal and set dataModal on generic error', () => {
    const testFormValue = {
      observations: 'Observation',
      qualification: 90,
      candidate: 1,
      state: 'Pass',
      technicalTest: 2
    };

    const mockError = { status: 500 };
    jest.spyOn(technicalTestService, 'registerResultTechnicalTest').mockReturnValue(throwError(mockError));

    component.registerTechnicalTest.setValue(testFormValue);

    component.confirmModal(true);

    expect(component.dataModal.displayModal).toBe(true);
  });

  it('should call confirmModal and set dataModal on success', () => {
    const translateService = TestBed.inject(TranslateService);
    translateService.use('es');
    component.dataModal.textModal = translateService.instant('campos_incompletos');

    component.onSubmit();

    expect(component.dataModal.displayModal).toBe(true);
    expect(component.dataModal.textModal).toBe('¿Desea registrar el resultado de una prueba técnica?');
  });

  it('should call getCandidate and set candidateOptions', () => {
    const mockCandidates = [{ testID: 1, users: { id: 1, names: 'John', surnames: 'Doe', totalName: 'John Doe' } }];
    const candidate = [{ id: 1, names: 'John', surnames: 'Doe', totalName: 'John Doe' }]
    jest.spyOn(candidateService, 'getTestCandidates').mockReturnValue(of(mockCandidates));
    component.getCandidate(1);

    expect(component.candidateOptions).toEqual(candidate);
  });

  it('should call closeModal and clear the form', () => {
    component.closeModal(true);
    expect(component.clearForm()).toBeUndefined();
  });
});
