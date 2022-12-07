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
export const BomiChartComponent = {
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

const BomiDoughnutChart = () => {
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
  // Bomi County Daily
  const bomiDaily = doughnutData
    .filter((bomi) => bomi.county === "Bomi")
    .map((bomi) => bomi.totalDatas)
    .reduce((bomi, bomiDaily) => (bomi += bomiDaily), null) +
    doughnutProject
      .filter((bomi) => bomi.county === "Bomi")
      .map((bomi) => bomi.totalDatas)
      .reduce((bomi, bomiDaily) => (bomi += bomiDaily), null)
    ;

  // Bomi County Weekly
  const bomiWeekly = doughnutData
    .filter((bomi) => bomi.county === "Bomi")
    .map((bomi) => bomi.totalDatas)
    .reduce((bomi, bomiWeekly) => (bomi += bomiWeekly), null) +
    doughnutProject
      .filter((bomi) => bomi.county === "Bomi")
      .map((bomi) => bomi.totalDatas)
      .reduce((bomi, bomiWeekly) => (bomi += bomiWeekly), null)
    ;

  // Bomi County Monthly
  const bomiMonthly = doughnutData
    .filter((bomi) => bomi.county === "Bomi")
    .map((bomi) => bomi.totalDatas)
    .reduce((bomi, bomiMonthly) => (bomi += bomiMonthly), null) +
    doughnutProject
      .filter((bomi) => bomi.county === "Bomi")
      .map((bomi) => bomi.totalDatas)
      .reduce((bomi, bomiMonthly) => (bomi += bomiMonthly), null)
    ;

  // Bomi County Yearly
  const bomiYearly = doughnutData
    .filter((bomi) => bomi.county === "Bomi")
    .map((bomi) => bomi.totalDatas)
    .reduce((bomi, bomiYearly) => (bomi += bomiYearly), null) +
    doughnutProject
      .filter((bomi) => bomi.county === "Bomi")
      .map((bomi) => bomi.totalDatas)
      .reduce((bomi, bomiYearly) => (bomi += bomiYearly), null)
    ;

  // Bomi County Males
  const bomiMales = doughnutData
    .filter((bomi) => bomi.county === "Bomi")
    .map((bomi) => bomi.totalMales)
    .reduce((bomi, bomiMales) => (bomi += bomiMales), null) +
    doughnutProject
      .filter((bomi) => bomi.county === "Bomi")
      .map((bomi) => bomi.totalMales)
      .reduce((bomi, bomiMales) => (bomi += bomiMales), null)
    ;

  // Bomi County Females
  const bomiFemales = doughnutData
    .filter((bomi) => bomi.county === "Bomi")
    .map((bomi) => bomi.totalFemales)
    .reduce((bomi, bomiFemales) => (bomi += bomiFemales), null) +
    doughnutProject
      .filter((bomi) => bomi.county === "Bomi")
      .map((bomi) => bomi.totalFemales)
      .reduce((bomi, bomiFemales) => (bomi += bomiFemales), null)
    ;
  // End of Bomi County


  BomiChartComponent.datasets[0].data[0] = bomiDaily;

  BomiChartComponent.datasets[0].data[1] = bomiWeekly;

  BomiChartComponent.datasets[0].data[2] = bomiMonthly;

  BomiChartComponent.datasets[0].data[3] = bomiYearly;

  BomiChartComponent.datasets[0].data[4] = bomiMales;

  BomiChartComponent.datasets[0].data[5] = bomiFemales;


  return (
    <React.Fragment>
      <Doughnut data={BomiChartComponent} />
    </React.Fragment>
  );
};

export default BomiDoughnutChart;
