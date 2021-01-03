import { Component, OnInit, ViewChild } from "@angular/core";
import { Chart } from "chart.js";
@Component({
  selector: "app-insight",
  templateUrl: "./insight.page.html",
  styleUrls: ["./insight.page.scss"],
})
export class InsightPage implements OnInit {
  @ViewChild("barChart") barChart;
  tab: string = "pageviews";
  bars: any;
  colorArray: any;

  constructor() {}

  ngOnInit() {}
  ionViewDidEnter() {
    this.createBarChart();
  }

  createBarChart() {
    this.bars = new Chart(this.barChart.nativeElement, {
      type: "bar",
      data: {
        labels: ["15", "14", "13", "12", "11", "10", "09"],
        datasets: [
          {
            data: [50, 30, 70, 45, 30, 10, 40, 25],
            backgroundColor: "#E0E0E0",
            borderWidth: 0,
          },
          {
            data: [40, 25, 50, 40, 25, 5, 35, 20],
            backgroundColor: "#FFCDBE",
            borderWidth: 0,
          },
        ],
      },
      options: {
        scales: {
          xAxes: [
            {
              ticks: {
                display: true,
                fontColor: "#000",
                fontWeight: "bold",
                fontFamily: "'Google Sans'",
                fontSize: 15,
              },
              gridLines: {
                display: false,
                drawBorder: false,
              },
              barThickness: 20, // number (pixels) or 'flex'
              maxBarThickness: 20, // number (pixels)
            },
          ],
          yAxes: [
            {
              ticks: {
                display: false,
              },
              gridLines: {
                display: true,
                drawBorder: false,
              },
            },
          ],
        },
        legend: {
          display: false,
          position: "right",
        },
        responsive: {
          display: true,
        },
        layout: {
          padding: {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
          },
        },
      },
    });
  }
}
