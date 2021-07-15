import {Component, Input, OnInit} from '@angular/core';
import {DataService} from '../services/data.service';

@Component({
  selector: 'app-type-selector',
  templateUrl: './type-selector.component.html',
  styleUrls: ['./type-selector.component.css']
})
export class TypeSelectorComponent implements OnInit {
  trainings = [];
  dayInfoValue = {
    training: {},
    example: '',
    focus: ''
  };
  @Input() details = true;

  constructor(public service: DataService) {
    const list = [];

    this.service.types.forEach(group => {
      group.types.forEach(type => {
        list.push(type);
      });
    });

    this.trainings = list;
  }

  ngOnInit(): void {
  }

  update(): void {
    this.service.save();
  }

  @Input()
  get dayInfo(): any {
    return this.dayInfoValue;
  }

  set dayInfo(dayInfo) {
    this.dayInfoValue = dayInfo;
    this.trainings.forEach(training => {
      if (dayInfo.training && dayInfo.training.name === training.name) {
        this.dayInfoValue.training = training;
      }
    });
  }
}
