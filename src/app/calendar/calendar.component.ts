import {Component, OnInit} from '@angular/core';
import {DataService} from '../services/data.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  data = {};

  constructor(public service: DataService) {
  }

  ngOnInit(): void {
  }

  weeks(): any {
    const weeks = [];

    for (let i = 0; i < 12; i++) {
      weeks.push(i + 1);
    }

    return weeks;
  }

  weeksFrom(start): any {
    const weeks = [];

    for (let i = start; i < start + 4; i++) {
      weeks.push(i + 1);
    }

    return weeks;
  }

  days(): any {
    return this.service.days();
  }

  update(value): void {
    console.log(this.data);
  }

  starts(): any {
    return [0, 4, 8, 12];
  }

  dayInfo(week, day, option): any {
    const dayInfo = this.service.calendar['Week_' + week + '_' + day];
    return option === 1 ? dayInfo.option1 : dayInfo.option2;
  }
}
