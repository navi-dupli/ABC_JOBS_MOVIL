import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  headers: HttpHeaders;

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({'Content-Type': 'application/json'});
  }

  login(email: string, password: string) {
    const headers = this.headers;
    const body = {
      email,
      password,
    };
    return this.http.post<any>(`${environment.url_api}/login`, body, { headers });
  }

  logout() {
    localStorage.removeItem('currentUser');
  }
}
