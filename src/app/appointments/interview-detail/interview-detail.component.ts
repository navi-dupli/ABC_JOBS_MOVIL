import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DetailInterviewModel } from '../../models/detail-interview';
import { DetailInterviewService } from '../../services/detail-interview/detail-interview.service';

@Component({
  selector: 'app-interview-detail',
  templateUrl: './interview-detail.component.html',
  styleUrls: ['./interview-detail.component.scss'],
})
export class InterviewDetailComponent implements OnInit {

  detailInterview!: DetailInterviewModel;
  showError = true;

  constructor(private detailInterviewService: DetailInterviewService,
    private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    const local = localStorage.getItem('currentUser');
    let currentUser: any;
    if (local !== null) {
      currentUser = JSON.parse(local);
    }
    this.route.params.subscribe((params: { [x: string]: any; }) => {
      const idInterview = params['id'];
      this.detailInterviewService.getDetailInterview(idInterview, currentUser.id).subscribe(
        {
          next: (response: any) => {
            this.detailInterview = response;
            this.showError = false;
          },
          error: () => {
            this.showError = true;
          }
        }
      );
    });
  }

}
