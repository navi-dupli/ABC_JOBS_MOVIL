import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InterviewDetailComponent } from './interview-detail.component';
import { TranslateFakeLoader, TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ActivatedRoute } from '@angular/router';
import { DetailInterviewService } from '../../services/detail-interview/detail-interview.service';
import { of } from 'rxjs';

describe('InterviewDetailComponent', () => {
  let component: InterviewDetailComponent;
  let fixture: ComponentFixture<InterviewDetailComponent>;
  let mockDetailInterviewService: Partial<DetailInterviewService>;
  let activatedRouteMock: any;
  let translate: TranslateService;

  beforeEach(() => {
    mockDetailInterviewService = {
      getDetailInterview: jest.fn()
    };

    const routeParams = of({ id: '123' }); 
    activatedRouteMock = { params: routeParams };

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader }
        })],
      declarations: [InterviewDetailComponent],
      providers: [{ provide: ActivatedRoute, useValue: activatedRouteMock }, { provide: DetailInterviewService, useValue: mockDetailInterviewService }]
    });
    fixture = TestBed.createComponent(InterviewDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should translate interview detail title', () => {
    translate = TestBed.inject(TranslateService);
    translate.setTranslation('es', { 'detalle_entrevista': 'Detalle de entrevista' });
    translate.use('es');
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('#title_result_interview').textContent).toContain('Detalle de entrevista');
  });
});
