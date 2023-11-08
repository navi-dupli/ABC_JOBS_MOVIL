import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DetailInterviewModel } from 'src/app/models/detail-interview';
import { DetailInterviewService } from 'src/app/services/detail-interview/detail-interview.service';

@Component({
  selector: 'app-interview-detail',
  templateUrl: './interview-detail.component.html',
  styleUrls: ['./interview-detail.component.scss'],
})
export class InterviewDetailComponent  implements OnInit {

  detailInterview!: DetailInterviewModel;
  showError = true;

  constructor(private detailInterviewService: DetailInterviewService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: { [x: string]: any; }) => {
      const idInterview = params['id'];
      this.detailInterviewService.getDetailInterview(idInterview).subscribe(
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
