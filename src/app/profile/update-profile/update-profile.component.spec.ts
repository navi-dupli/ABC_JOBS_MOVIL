import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UpdateProfileComponent } from './update-profile.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { of } from 'rxjs';

describe('UpdateProfileComponent', () => {
  let component: UpdateProfileComponent;
  let fixture: ComponentFixture<UpdateProfileComponent>;
  const currentUser = { access_token: 'your-access-token' };
  localStorage.setItem('currentUser', JSON.stringify(currentUser));

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateProfileComponent],
      imports: [HttpClientTestingModule, TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useValue: {
            getTranslation: (lang: string) => {
              return of({ 'actualizar_habilidades_confirmacion': '¿Desea registrar actualizar habilidades e idiomas?' });
            }
          }
        }
      })],
    }).compileComponents();

    fixture = TestBed.createComponent(UpdateProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
