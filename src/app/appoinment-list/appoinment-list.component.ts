import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { Appoinment } from '../models/appoinments';

@Component({
  selector: 'app-appoinment-list',
  templateUrl: './appoinment-list.component.html',
  styleUrls: ['./appoinment-list.component.css'],
})
export class AppoinmentListComponent implements OnInit {
  newAppoinmentTitle: string = '';
  newAppoinmentDate: Date = new Date();
  appoinments: Appoinment[] = [];

  ngOnInit(): void {
    let savedAppoinments = localStorage.getItem('appoinments');
    this.appoinments = savedAppoinments ? JSON.parse(savedAppoinments) : [];
  }

  addAppoinment() {
    if (this.newAppoinmentTitle.trim().length && this.newAppoinmentDate) {
      let newAppoinment: Appoinment = {
        id: Date.now(),
        title: this.newAppoinmentTitle,
        date: this.newAppoinmentDate,
      };
      this.appoinments.push(newAppoinment);

      this.newAppoinmentTitle = '';
      this.newAppoinmentDate = new Date();

      localStorage.setItem('appoinments', JSON.stringify(this.appoinments));
    }
  }

  deleteAppoinment(index: number) {
    this.appoinments.splice(index, 1);
    localStorage.setItem('appoinments', JSON.stringify(this.appoinments));
  }
}
