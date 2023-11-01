import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {ProjectModel} from "../../models/projects";
import {environment} from "../../../environments/environment";

@Injectable({
    providedIn: 'root'
})
export class TeamsService {

  constructor(private http: HttpClient) {
  }

  getTeamsByproject(projectId: number) {
    return this.http.get<any>(`${environment.url_api}/projects-app/teams/${projectId}`);
  }

  addMemberToTeam(body: any) {
    return this.http.post<any>(`${environment.url_api}/projects-app/teams/add-member-team`, body);
  }

}
