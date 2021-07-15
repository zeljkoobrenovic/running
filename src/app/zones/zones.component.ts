import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-zones',
  templateUrl: './zones.component.html',
  styleUrls: ['./zones.component.css']
})
export class ZonesComponent implements OnInit {

  dZones = [
    {
      name: 'D0',
      start: 0.67,
      end: 0.73
    },
    {
      name: 'D1',
      start: 0.73,
      end: 0.81
    },
    {
      name: 'D2',
      start: 0.81,
      end: 0.91
    },
    {
      name: 'D3',
      start: 0.91,
      end: 1
    }
  ];
  rpeZones = [
    {
      start: 0.50,
      end: 0.60,
      zones: [
        {
          name: '0 Nothing',
          activity: '',
          talking: ''
        },
        {
          name: '1 Very Easy',
          activity: '',
          talking: ''
        }]
    },
    {
      start: 0.60,
      end: 0.70,
      zones: [
        {
          name: '2 Easy',
          activity: '',
          talking: ''
        },
        {
          name: '3 Moderate',
          activity: 'Recovery Run',
          talking: 'Converse with almost no effort'
        }]
    },
    {
      start: 0.70,
      end: 0.80,
      zones: [
        {
          name: '4 Somewhat Hard',
          activity: '',
          talking: 'Converse with a little more effort'
        },
        {
          name: '5 Hard',
          activity: 'Long or Steady Run',
          talking: 'Conversation requires effort'
        },
        {
          name: '6',
          activity: 'Tempo Run',
          talking: 'Conversation is difficult and requires a lot of effort'
        }
      ]
    },
    {
      start: 0.80,
      end: 0.90,
      zones: [
        {
          name: '7 Very Hard',
          activity: 'Tempo Run',
          talking: ''
        },
        {
          name: '8',
          activity: 'Interval Session or Race Pace',
          talking: 'Very difficult conversation and requires maximal effort'
        }]
    },
    {
      start: 0.90,
      end: 1,
      zones: [
        {
          name: '9',
          activity: 'Interval Session or Race Pace',
          talking: 'Conversation not possible, requires full effort'
        },
        {
          name: '10 Maximal',
          activity: 'Sprint',
          talking: ''
        }]
    }
  ];
  heart = 180;

  constructor() {
  }

  ngOnInit(): void {
  }

  start(zone): number {
    return Math.round(zone.start * this.heart);
  }

  end(zone): any {
    return zone.end ? Math.round(zone.end * this.heart) : '';
  }

  perc(start: number): string {
    return (start ? Math.round(start * 100) + '%' : '');
  }
}
