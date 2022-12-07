import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Chart as ChartJS,
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip,
  SubTitle,
} from "chart.js";
import {
  Doughnut,
  // Line,
  // Bar,
  // Pie,
  // Bubble,
  // PolarArea,
  // Radar,
  // Scatter,
} from "react-chartjs-2";

ChartJS.register(
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip,
  SubTitle
);

// Start Doughnut Chart Setting
export const RivergeeChartComponent = {
  labels: [
    "Daily",
    "Weekly",
    "Monthly",
    "Yearly",
    "Total Males",
    "Total Females",
  ],
  datasets: [
    {
      label: "# of Enrollment Per County",
      data: [],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 100, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 80, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

// End of Doughnut Chart Setting

const RivergeeDoughnutChart = () => {
  // Fetching Data from backend
  const [doughnutData, showDoughnutData] = useState([]);
  const [doughnutProject, showDoughnutProject] = useState([]);

  // Fetch Data
  useEffect(() => {
    axios.get("http://localhost:5000/datas").then((chartData) => {
      showDoughnutData(chartData.data);
    });
  }, []);

  // Fetch Project
  useEffect(() => {
    axios.get("http://localhost:5000/projects").then((chartData) => {
      showDoughnutProject(chartData.data);
    });
  }, []);

  // Pushing data values to the chart array
  // River Gee County Daily
  const rivergeeDaily = doughnutData
    .filter((rivergee) => rivergee.county === "River Gee")
    .map((rivergee) => rivergee.totalDatas)
    .reduce((rivergee, rivergeeDaily) => (rivergee += rivergeeDaily), null) +
    doughnutProject
      .filter((rivergee) => rivergee.county === "River Gee")
      .map((rivergee) => rivergee.totalDatas)
      .reduce((rivergee, rivergeeDaily) => (rivergee += rivergeeDaily), null)
    ;

  // River Gee County Weekly
  const rivergeeWeekly = doughnutData
    .filter((rivergee) => rivergee.county === "River Gee")
    .map((rivergee) => rivergee.totalDatas)
    .reduce((rivergee, rivergeeWeekly) => (rivergee += rivergeeWeekly), null) +
    doughnutProject
      .filter((rivergee) => rivergee.county === "River Gee")
      .map((rivergee) => rivergee.totalDatas)
      .reduce((rivergee, rivergeeWeekly) => (rivergee += rivergeeWeekly), null)
    ;

  // River Gee County Monthly
  const rivergeeMonthly = doughnutData
    .filter((rivergee) => rivergee.county === "River Gee")
    .map((rivergee) => rivergee.totalDatas)
    .reduce((rivergee, rivergeeMonthly) => (rivergee += rivergeeMonthly), null) +
    doughnutProject
      .filter((rivergee) => rivergee.county === "River Gee")
      .map((rivergee) => rivergee.totalDatas)
      .reduce((rivergee, rivergeeMonthly) => (rivergee += rivergeeMonthly), null)
    ;

  // River Gee County Yearly
  const rivergeeYearly = doughnutData
    .filter((rivergee) => rivergee.county === "River Gee")
    .map((rivergee) => rivergee.totalDatas)
    .reduce((rivergee, rivergeeYearly) => (rivergee += rivergeeYearly), null) +
    doughnutProject
      .filter((rivergee) => rivergee.county === "River Gee")
      .map((rivergee) => rivergee.totalDatas)
      .reduce((rivergee, rivergeeYearly) => (rivergee += rivergeeYearly), null)
    ;

  // River Gee County Males
  const rivergeeMales = doughnutData
    .filter((rivergee) => rivergee.county === "River Gee")
    .map((rivergee) => rivergee.totalMales)
    .reduce((rivergee, rivergeeMales) => (rivergee += rivergeeMales), null) +
    doughnutProject
      .filter((rivergee) => rivergee.county === "River Gee")
      .map((rivergee) => rivergee.totalMales)
      .reduce((rivergee, rivergeeMales) => (rivergee += rivergeeMales), null)
    ;

  // River Gee County Females
  const rivergeeFemales = doughnutData
    .filter((rivergee) => rivergee.county === "River Gee")
    .map((rivergee) => rivergee.totalFemales)
    .reduce((rivergee, rivergeeFemales) => (rivergee += rivergeeFemales), null) +
    doughnutProject
      .filter((rivergee) => rivergee.county === "River Gee")
      .map((rivergee) => rivergee.totalFemales)
      .reduce((rivergee, rivergeeFemales) => (rivergee += rivergeeFemales), null)
    ;
  // End of River Gee County


  RivergeeChartComponent.datasets[0].data[0] = rivergeeDaily;

  RivergeeChartComponent.datasets[0].data[1] = rivergeeWeekly;

  RivergeeChartComponent.datasets[0].data[2] = rivergeeMonthly;

  RivergeeChartComponent.datasets[0].data[3] = rivergeeYearly;

  RivergeeChartComponent.datasets[0].data[4] = rivergeeMales;

  RivergeeChartComponent.datasets[0].data[5] = rivergeeFemales;

  return (
    <React.Fragment>
      <Doughnut data={RivergeeChartComponent} />
    </React.Fragment>
  );
};

export default RivergeeDoughnutChart;
