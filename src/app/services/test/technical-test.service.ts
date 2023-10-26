import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { ResultTechnicalTestModel } from 'src/app/models/technical-test.model';

@Injectable({
  providedIn: 'root'
})
export class TechnicalTestService {

  constructor(private http: HttpClient) {
  }

  getTechnicalTest() {
    return this.http.get<any>(`${environment.url_api}/evaluations-app/tests`);
  }

  registerResultTechnicalTest(body: ResultTechnicalTestModel) {
    return this.http.post<any>(`${environment.url_api}/evaluations-app/technical-test`, body);
  }

}
