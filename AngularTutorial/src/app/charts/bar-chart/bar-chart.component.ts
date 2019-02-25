import { Component, OnInit } from '@angular/core';

const SAMPLE_BARCHART_DATA: any[]=[
  { data: [65, 59, 81, 80, 54, 44, 12, 10], label: 'Q3 Sales' },
  { data: [43, 22, 81, 12, 76, 44, 18, 87], label: 'Q4 Sales' }
]

const SAMPLE_BARCHART_LABELS: string[] = ['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7', 'W8'];

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {

  constructor() { }

  public barChartData: any[] = SAMPLE_BARCHART_DATA;
  public barChartLabels: string[] = SAMPLE_BARCHART_LABELS;
  public barCharType = 'bar';
  public barChartLegend = false;
  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };


  ngOnInit() {
  }

}
