import { Component, OnInit } from '@angular/core';
import { LINE_CHART_COLORS } from '../../shared/chart.colors';

const LINE_CHART_SAMPLE_DATA: any[] = [
  { data: [14, 11, 26, 71, 54, 91], label: 'Persia' },
  { data: [65, 11, 78, 91, 93, 90], label: 'Angola' },
  { data: [98, 21, 24, 24, 99, 23], label: 'Venesuella' },
];

const LINE_CHART_LABELS: string[] = ['Jan', 'Feb','Mar','Apr','May','Jun']

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  lineChartData = LINE_CHART_SAMPLE_DATA;
  lineChartLabels = LINE_CHART_LABELS;
  lineChartOptions: any = {
    responsive: true
  };
  lineChartLegend: true;
  lineChartType = 'line';
  lineChartColors = LINE_CHART_COLORS;

}
