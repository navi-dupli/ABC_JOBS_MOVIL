import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { RegisterTechnicalTestComponent } from './register-technical-test.component';
import { CandidateService } from '../../services/candidates/candidate.service';
import { TechnicalTestService } from '../../services/test/technical-test.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CustomDialogModule } from '../../components/custom-dialog/custom-dialog.module';
import { TranslationModule } from '../../components/translation/translation.module';

describe('RegisterTechnicalTestComponent', () => {
  let component: RegisterTechnicalTestComponent;
  let fixture: ComponentFixture<RegisterTechnicalTestComponent>;
  let candidateService: CandidateService;
  let technicalTestService: TechnicalTestService
  const currentUser = { access_token: 'your-access-token' };
  localStorage.setItem('currentUser', JSON.stringify(currentUser));

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterTechnicalTestComponent],
      imports: [HttpClientTestingModule, TranslateModule.forRoot({
        loader: { provide: TranslateLoader, useClass: TranslateFakeLoader }
      }), CustomDialogModule, TranslationModule],
      providers: [CandidateService, TechnicalTestService]
    }).compileComponents();

    fixture = TestBed.createComponent(RegisterTechnicalTestComponent);
    candidateService = TestBed.inject(CandidateService);
    technicalTestService = TestBed.inject(TechnicalTestService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
