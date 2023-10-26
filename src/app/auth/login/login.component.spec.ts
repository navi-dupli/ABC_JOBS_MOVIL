import { ComponentFixture, fakeAsync, TestBed} from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AuthService } from '../../services/auth/auth.service';
import { LoginComponent } from './login.component';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { of, throwError } from 'rxjs';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let authService: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useValue: {
            getTranslation: (lang: string) => {
              return of({ 'error_inicio_sesion': 'Hubo un error al iniciar sesión' });
            }
          }
        }
      })],
      declarations: [LoginComponent],
      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
    });

    fixture = TestBed.createComponent(LoginComponent);
    authService = TestBed.inject(AuthService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should login user successfully', fakeAsync(() => {
    const loginSpy = jest.spyOn(authService, 'login').mockReturnValue(of({ user: 'usuarioEjemplo' }));

    component.login.controls['email'].setValue('ejemplo@correo.com');
    component.login.controls['password'].setValue('contraseñaSegura');
    component.onSubmit();

    expect(loginSpy).toHaveBeenCalledWith('ejemplo@correo.com', 'contraseñaSegura');
  }));

  it('should return error on login', fakeAsync(() => {
    const translateService = TestBed.inject(TranslateService);
    translateService.use('es');
    component.dataModal.textModal = translateService.instant('error_inicio_sesion');

    const loginSpy = jest.spyOn(authService, 'login').mockReturnValue(throwError(() => 'Error en la autenticación'));

    component.login.controls['email'].setValue('ejemplo@correo.com');
    component.login.controls['password'].setValue('contraseñaIncorrecta');
    component.onSubmit();

    expect(loginSpy).toHaveBeenCalledWith('ejemplo@correo.com', 'contraseñaIncorrecta');
    expect(component.dataModal.displayModal).toBe(true);
    expect(component.dataModal.textModal).toBe('Hubo un error al iniciar sesión');
  }));

});
