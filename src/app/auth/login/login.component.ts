import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomDialogModel } from 'src/app/models/custom-dialog.model';
import { AuthService } from '../../services/auth.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  login!: FormGroup;
  valCheck: string[] = ['remember'];
  dataModal: CustomDialogModel = {
    displayModal: false,
  };

  constructor(private router: Router, private authService: AuthService, private translate: TranslateService) { }

  ngOnInit() {
    this.login = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ]),
    });
  }

  onSubmit() {
    const textModal = this.translate.instant("error_inicio_sesión");
    this.authService.login(this.email!.value, this.password!.value).subscribe({
      next: (result) => {
        if (result) {
          localStorage.setItem('currentUser', JSON.stringify(result));
          this.router.navigate(['/']);
        }
      },
      error: (e) => {
        this.dataModal = {
          displayModal: true,
          textModal: textModal,
          iconModal: 'pi-exclamation-circle',
          typeModal: 'Error',
        };
      },
    });
  }

  get email() { return this.login.get('email'); }
  get password() { return this.login.get('password'); }
}
