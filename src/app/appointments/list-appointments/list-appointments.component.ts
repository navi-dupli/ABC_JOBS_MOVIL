import { Component, OnInit } from '@angular/core';
import { AppointmentsService } from '../../services/appointments/appointments.service';

@Component({
  selector: 'app-list-appointments',
  templateUrl: './list-appointments.component.html',
  styleUrls: ['./list-appointments.component.scss'],
})
export class ListAppointmentsComponent implements OnInit {

  constructor(private appointmentsService: AppointmentsService) { }

  ngOnInit() { 
    this.getListAppointments()
  }

  getListAppointments() {
    const local = localStorage.getItem('currentUser');
      let currentUser: any;
      if (local !== null) {
        currentUser = JSON.parse(local);
      }
    this.appointmentsService.getAppointmentsUser(currentUser.id).subscribe(result => {
      console.log(result)
    });
  }

}
