import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-dash-data-bottom',
  templateUrl: './dash-data-bottom.component.html',
  styleUrls: ['./dash-data-bottom.component.css']
})
export class DashDataBottomComponent implements OnInit {

  constructor() { }

  myChart = [];
  BarChart = [];
  title = 'angular8chartjs';
  canvas: any;
  ctx: any;
  ngOnInit() {
    const dpr = window.devicePixelRatio || 1;
    this.canvas = document.getElementById('myBarChart');
    const rect = this.canvas.getBoundingClientRect();
    this.canvas.width = rect.width * dpr;
    this.canvas.height = rect.height * dpr;
    this.ctx = this.canvas.getContext('2d');
    console.log(`old ${this.ctx}`);
    this.ctx.scale(dpr, dpr);
    console.log(`new ${this.ctx}`);

    this.myChart.push(new Chart(this.ctx, {
      type: 'bar',
      data: {
        labels: ['Jun 2', 'Jun 9', 'Jun 16', 'Jun 23', 'Jun 30', 'jul 7'],
        datasets: [
          {
            label: 'day 1',
            backgroundColor: '#aed3ff',
            borderWidth: 1,
            data: [34000, 18000, 25600, 55120, 16000, 64383]
          },
          {
            label: 'day 2',
            backgroundColor: '#aed3ff',
            borderWidth: 1,
            data: [95000, 82100, 55600, 55120, 45000, 36970]
          },
          {
            label: 'day 3',
            backgroundColor: '#aed3ff',
            borderWidth: 1,
            data: [94471, 15443, 31127, 91561, 37179, 48761]
          },
          {
            label: 'day 4',
            backgroundColor: '#aed3ff',
            borderWidth: 1,
            data: [27576, 44319, 88446, 35358, 78512, 94333]
          },
          {
            label: 'day 5',
            backgroundColor: '#aed3ff',
            borderWidth: 1,
            data: [48383, 75809, 44498, 80012, 53937, 86040]
          },
          {
            label: 'day 6',
            backgroundColor: '#aed3ff',
            borderWidth: 1,
            data: [35156, 30245, 98192, 90894, 63531, 77052]
          },
        ]
      },
      options: {
        responsive: false,
      }
    }));
  }

}
