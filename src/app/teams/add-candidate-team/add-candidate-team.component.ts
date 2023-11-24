import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { CustomDialogModel } from '../../models/custom-dialog.model';
import { CandidateService } from '../../services/candidates/candidate.service';
import { TeamsModel } from '../../../app/models/teams';
import { ProjectModel } from '../../../app/models/projects';
import { Candidate } from '../../../app/models/candidate';
import { SessionService } from '../../../app/services/auth/session.service';
import { ProjectsService } from '../../../app/services/projects/projects.service';
import { TeamsService } from '../../../app/services/teams/teams.service';

@Component({
  selector: 'app-add-candidate-team',
  templateUrl: './add-candidate-team.component.html',
  styleUrls: ['./add-candidate-team.component.scss'],
})
export class AddCandidateTeamComponent implements OnInit {

  addMember!: FormGroup;
  dataModal: CustomDialogModel = {
    displayModal: false
  }
  user: any;
  projectOptions: ProjectModel[] = [];
  teamsOptions: TeamsModel[] = [];
  cadidateOptions: Candidate[] = [];
  loading = false;

  constructor(
    private translate: TranslateService,
    private sessionService: SessionService,
    private projectService: ProjectsService,
    private teamsService: TeamsService,
    private candidateService: CandidateService
  ) {
    this.user = this.sessionService.getUser();

    this.addMember = new FormGroup({
      projectId: new FormControl('', [Validators.required]),
      teamId: new FormControl('', [Validators.required]),
      users: new FormControl('', [Validators.required]),
    });
  }
  ngOnInit(): void {
    this.projectService.getProjectsByCompany(this.user.company_id).subscribe((result: ProjectModel[]) => {
      this.projectOptions = result;
    });

    this.candidateService.getCandidates().subscribe(result => {
      this.cadidateOptions = result.map((candidate: Candidate) => {
        candidate.fullName = `${candidate.names} ${candidate.surnames}`;
        return candidate;
      });
    });
  }

  onSubmit() {
    const textModal = this.translate.instant("asignar_candidatos_confirmacion");
    const typeModal = this.translate.instant("confirmacion");
    this.dataModal = {
      displayModal: true,
      textModal: textModal,
      iconModal: 'pi-exclamation-triangle',
      typeModal: typeModal
    }
  }

  confirmModal(event: boolean) {
    if (event) {
      if (this.addMember.valid) {
        this.loading = true;
        this.teamsService.addMemberToTeam(this.addMember.value).subscribe( {
          next: (result: any) => {
            if (result) {
              this.loading = false;
              this.dataModal = {
                displayModal: true,
                textModal: this.translate.instant("asignar_candidatos_correctamente"),
                iconModal: 'pi-check',
                typeModal: this.translate.instant("exito")
              }
            }
          },
          error: (e: any) => {
            this.loading = false;
            this.dataModal = {
              displayModal: true,
              textModal: this.translate.instant("error_asignar_candidatos"),
              iconModal: 'pi-times',
              typeModal: this.translate.instant("error")
            }
          }
        });
      } else {
        const textModal = this.translate.instant("campos_incompletos");
        this.dataModal = {
            displayModal: true,
            textModal: textModal,
            iconModal: 'pi-exclamation-circle',
            typeModal: 'Error'
        }
      }
    }
  }

  clearForm() {
    this.addMember.reset();
  }

  closeModal(event: boolean) {
    console.log(event);
    
    this.loading = false;
    if (event) {
      this.clearForm();
    }
  }

  onChangeProject(projectId: number) {
    this.teamsService.getTeamsByproject(projectId).subscribe((result: TeamsModel[]) => {
      this.teamsOptions = result;
    });
  }

  get projectId() { return this.addMember.get('projectId'); }
  get teamId() { return this.addMember.get('teamId'); }
  get users() { return this.addMember.get('users'); }
  
}
