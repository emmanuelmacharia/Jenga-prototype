import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, Chart } from 'chart.js';
import { Color, Label } from 'ng2-charts';
// import * as CanvasJS from 'E:/projects/source/repos/equity/equity-frontend-task/node_modules/canvasjs';

@Component({
  selector: 'app-dash-data-top',
  templateUrl: './dash-data-top.component.html',
  styleUrls: ['./dash-data-top.component.css']
})
export class DashDataTopComponent implements OnInit {

  myChart = [];
  LineChart = [];
  title = 'angular8chartjs';
  canvas: any;
  ctx: any;

  ngOnInit() {
    const dpr = window.devicePixelRatio || 1;
    this.canvas = document.getElementById('myChart');
    const rect = this.canvas.getBoundingClientRect();
    this.canvas.width = rect.width * dpr;
    this.canvas.height = rect.height * dpr;
    this.ctx = this.canvas.getContext('2d');
    console.log(`old ${this.ctx}`);
    this.ctx.scale(dpr, dpr);
    console.log(`new ${this.ctx}`);

    this.myChart.push(new Chart(this.ctx, {
      type: 'line',
      data: {
        labels: ['Jun 12', 'Jun 13', 'Jun 14', 'Jun 15', 'Jun 16', 'Jun 17', 'Jun 18'],
        datasets: [{
          label: '',
          data: [0, 4000, 11000, 17000, 12000, 7000, 25000],
          fill: false,
          lineTension: 0.35,
          backgroundColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(255, 99, 132, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        responsive: false,
      }
    }));
  }



  // ngOnInit() {
  //   // this.LineChart.push(new Chart('lineChart', {
  //   //   type: 'line',
  //   //   data: {
  //   //     labels: ['Jun 2', 'Jun 3', 'Jun 4', 'Jun 5', 'Jun 6', 'Jun 7', 'Jun 8'],
  //   //     datasets: [{
  //   //       label: '',
  //   //       data: [0, 4, 11, 17, 12, 7, 25],
  //   //       fill: false,
  //   //       lineTension: 0.2,
  //   //       borderColor: '#d6d6d6',
  //   //       borderWidth: 2
  //   //     }]
  //   //   },
  //   //   options: {
  //   //     title: {
  //   //       text: 'Analytics',
  //   //       display: false
  //   //     },
  //   //     scales: {
  //   //       yAxes: [{
  //   //         ticks: { beginAtZero: true }
  //   //       }]
  //   //     }
  //   //   }
  //   // }));
  // }
}
