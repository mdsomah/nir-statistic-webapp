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
import { Doughnut } from "react-chartjs-2";

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
export const BongChartComponent = {
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

const BongDoughnutChart = () => {
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
  // Bong County Daily
  const bongDaily = doughnutData
    .filter((bong) => bong.county === "Bong")
    .map((bong) => bong.totalDatas)
    .reduce((bong, bongDaily) => (bong += bongDaily), null) +
    doughnutProject
      .filter((bong) => bong.county === "Bong")
      .map((bong) => bong.totalDatas)
      .reduce((bong, bongDaily) => (bong += bongDaily), null)
    ;

  // Bong County Weekly
  const bongWeekly = doughnutData
    .filter((bong) => bong.county === "Bong")
    .map((bong) => bong.totalDatas)
    .reduce((bong, bongWeekly) => (bong += bongWeekly), null) +
    doughnutProject
      .filter((bong) => bong.county === "Bong")
      .map((bong) => bong.totalDatas)
      .reduce((bong, bongWeekly) => (bong += bongWeekly), null)
    ;

  // Bong County Monthly
  const bongMonthly = doughnutData
    .filter((bong) => bong.county === "Bong")
    .map((bong) => bong.totalDatas)
    .reduce((bong, bongMonthly) => (bong += bongMonthly), null) +
    doughnutProject
      .filter((bong) => bong.county === "Bong")
      .map((bong) => bong.totalDatas)
      .reduce((bong, bongMonthly) => (bong += bongMonthly), null)
    ;

  // Bong County Yearly
  const bongYearly = doughnutData
    .filter((bong) => bong.county === "Bong")
    .map((bong) => bong.totalDatas)
    .reduce((bong, bongYearly) => (bong += bongYearly), null) +
    doughnutProject
      .filter((bong) => bong.county === "Bong")
      .map((bong) => bong.totalDatas)
      .reduce((bong, bongYearly) => (bong += bongYearly), null)
    ;

  // Bong County Males
  const bongMales = doughnutData
    .filter((bong) => bong.county === "Bong")
    .map((bong) => bong.totalMales)
    .reduce((bong, bongMales) => (bong += bongMales), null) +
    doughnutProject
      .filter((bong) => bong.county === "Bong")
      .map((bong) => bong.totalMales)
      .reduce((bong, bongMales) => (bong += bongMales), null)
    ;

  // Bong County Females
  const bongFemales = doughnutData
    .filter((bong) => bong.county === "Bong")
    .map((bong) => bong.totalFemales)
    .reduce((bong, bongFemales) => (bong += bongFemales), null) +
    doughnutProject
      .filter((bong) => bong.county === "Bong")
      .map((bong) => bong.totalFemales)
      .reduce((bong, bongFemales) => (bong += bongFemales), null)
    ;
  // End of Bong County


  BongChartComponent.datasets[0].data.length = 6;

  BongChartComponent.datasets[0].data[0] = bongDaily;

  BongChartComponent.datasets[0].data[1] = bongWeekly;

  BongChartComponent.datasets[0].data[2] = bongMonthly;

  BongChartComponent.datasets[0].data[3] = bongYearly;

  BongChartComponent.datasets[0].data[4] = bongMales;

  BongChartComponent.datasets[0].data[5] = bongFemales;


  return (
    <React.Fragment>
      <Doughnut data={BongChartComponent} />
    </React.Fragment>
  );
};

export default BongDoughnutChart;
