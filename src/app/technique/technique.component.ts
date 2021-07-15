import {Component, OnInit} from '@angular/core';
import {DataService} from '../services/data.service';

@Component({
  selector: 'app-technique',
  templateUrl: './technique.component.html',
  styleUrls: ['./technique.component.css']
})
export class TechniqueComponent implements OnInit {

  constructor(public service: DataService) {
  }

  ngOnInit(): void {
  }

}
