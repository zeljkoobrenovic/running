import {Component, OnInit} from '@angular/core';
import {DataService} from '../services/data.service';

@Component({
  selector: 'app-types',
  templateUrl: './types.component.html',
  styleUrls: ['./types.component.css']
})
export class TypesComponent implements OnInit {
  races = [{name: '5K', examples: 'examples5k'}, {name: '10K', examples: 'examples10k'}, {name: '21K', examples: 'examples21k'}];
  training = 'examples5k';
  focus = '';
  selected = {};

  constructor(public service: DataService) {
  }

  ngOnInit(): void {
  }

}
