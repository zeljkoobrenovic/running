import {Component, OnInit} from '@angular/core';
import {DataService} from '../services/data.service';

@Component({
  selector: 'app-week',
  templateUrl: './week.component.html',
  styleUrls: ['./week.component.css']
})
export class WeekComponent implements OnInit {
  data = {};

  constructor(public service: DataService) {
  }

  ngOnInit(): void {
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
}
