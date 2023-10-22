import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TechnicalTestService {

  headers: HttpHeaders;

  constructor(private http: HttpClient) {
    const local = localStorage.getItem('currentUser');
    let currentUser: any;
    if (local !== null) {
      currentUser = JSON.parse(local);
    }
    this.headers = new HttpHeaders(
      {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${currentUser.access_token}`
      }
    );
  }

  getTechnicalTest() {
    const options = { headers: this.headers }    
    return this.http.get<any>(`${environment.url_api}/evaluations-app/tests`, options);
  }
}
