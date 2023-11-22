import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WorkExperienceComponent } from './work-experience.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { of } from 'rxjs';

describe('WorkExperienceComponent', () => {
  let component: WorkExperienceComponent;
  let fixture: ComponentFixture<WorkExperienceComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkExperienceComponent ],
      imports: [HttpClientTestingModule, TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useValue: {
            getTranslation: (lang: string) => {
              return of({ 'actualizar_experiencia_confirmacion': '¿Desea registrar la información de experiencia laboral?' });
            }
          }
        }
      })],
    }).compileComponents();

    fixture = TestBed.createComponent(WorkExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
