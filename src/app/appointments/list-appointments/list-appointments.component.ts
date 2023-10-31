import { Component, OnInit } from '@angular/core';
import { AppointmentsService } from '../../services/appointments/appointments.service';
import * as moment from 'moment';

@Component({
  selector: 'app-list-appointments',
  templateUrl: './list-appointments.component.html',
  styleUrls: ['./list-appointments.component.scss'],
})
export class ListAppointmentsComponent implements OnInit {
  totalAppointments: any = [];
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
      for (let index = 0; index < result.length; index++) {
        const element = result[index];
        result[index].dateMoment = moment(element.date);
        result[index].dateFormat = result[index].dateMoment.utc().format("YYYY-MM-DD")
        result[index].hourFormat = result[index].dateMoment.utc().format("h:mm:ss a")
        result[index].isDone = result[index].dateMoment.isBefore(moment())
        result[index].severity = result[index].isDone ? "info" : ""
        result[index].participantName = result[index].candidateName
        if (currentUser.rol == "CANDIDATO") {
          result[index].participantName = result[index].interviewerName
        } else if (currentUser.rol == "FUNCIONARIO_ABC") {
          result[index].participantName = result[index].participantName + " " + result[index].interviewerName
        }
      }
      this.orderAppointments(result)
    });

  }


  orderAppointments(appointments: any[]) {
    for (let index = 0; index < appointments.length; index++) {
      let day = appointments[index].dateFormat
      const found = this.totalAppointments.find((element: { date: any; }) => element.date == day);
      if (!found) {
        this.totalAppointments.push({
          date: day,
          appointments: [appointments[index]]
        })
      } else {
        for (let i = 0; i < this.totalAppointments.length; i++) {
          if (this.totalAppointments[i].date == day) {
            this.totalAppointments[i].appointments.push(appointments[index])
          }

        }
      }
    }
  }


}
