import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {
  }

  login(email: string, password: string) {
    const body = {
      email,
      password,
    };
    return this.http.post<any>(`${environment.url_api}/login`, body);
  }

  logout() {
    localStorage.removeItem('currentUser');
  }
}
