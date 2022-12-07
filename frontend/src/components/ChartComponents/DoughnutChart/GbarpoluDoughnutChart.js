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
export const GbarpoluChartComponent = {
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

const GbarpoluDoughnutChart = () => {
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
  // Gbarpolu County Daily
  const gbarpoluDaily = doughnutData
    .filter((gbarpolu) => gbarpolu.county === "Gbarpolu")
    .map((gbarpolu) => gbarpolu.totalDatas)
    .reduce((gbarpolu, gbarpoluDaily) => (gbarpolu += gbarpoluDaily), null) +
    doughnutProject
      .filter((gbarpolu) => gbarpolu.county === "Gbarpolu")
      .map((gbarpolu) => gbarpolu.totalDatas)
      .reduce((gbarpolu, gbarpoluDaily) => (gbarpolu += gbarpoluDaily), null)
    ;

  // Gbarpolu County Weekly
  const gbarpoluWeekly = doughnutData
    .filter((gbarpolu) => gbarpolu.county === "Gbarpolu")
    .map((gbarpolu) => gbarpolu.totalDatas)
    .reduce((gbarpolu, gbarpoluWeekly) => (gbarpolu += gbarpoluWeekly), null) +
    doughnutProject
      .filter((gbarpolu) => gbarpolu.county === "Gbarpolu")
      .map((gbarpolu) => gbarpolu.totalDatas)
      .reduce((gbarpolu, gbarpoluWeekly) => (gbarpolu += gbarpoluWeekly), null)
    ;

  // Gbarpolu County Monthly
  const gbarpoluMonthly = doughnutData
    .filter((gbarpolu) => gbarpolu.county === "Gbarpolu")
    .map((gbarpolu) => gbarpolu.totalDatas)
    .reduce((gbarpolu, gbarpoluMonthly) => (gbarpolu += gbarpoluMonthly), null) +
    doughnutProject
      .filter((gbarpolu) => gbarpolu.county === "Gbarpolu")
      .map((gbarpolu) => gbarpolu.totalDatas)
      .reduce((gbarpolu, gbarpoluMonthly) => (gbarpolu += gbarpoluMonthly), null)
    ;

  // Gbarpolu County Yearly
  const gbarpoluYearly = doughnutData
    .filter((gbarpolu) => gbarpolu.county === "Gbarpolu")
    .map((gbarpolu) => gbarpolu.totalDatas)
    .reduce((gbarpolu, gbarpoluYearly) => (gbarpolu += gbarpoluYearly), null) +
    doughnutProject
      .filter((gbarpolu) => gbarpolu.county === "Gbarpolu")
      .map((gbarpolu) => gbarpolu.totalDatas)
      .reduce((gbarpolu, gbarpoluYearly) => (gbarpolu += gbarpoluYearly), null)
    ;

  // Gbarpolu County Males
  const gbarpoluMales = doughnutData
    .filter((gbarpolu) => gbarpolu.county === "Gbarpolu")
    .map((gbarpolu) => gbarpolu.totalMales)
    .reduce((gbarpolu, gbarpoluMales) => (gbarpolu += gbarpoluMales), null) +
    doughnutProject
      .filter((gbarpolu) => gbarpolu.county === "Gbarpolu")
      .map((gbarpolu) => gbarpolu.totalMales)
      .reduce((gbarpolu, gbarpoluMales) => (gbarpolu += gbarpoluMales), null)
    ;

  // Gbarpolu County Females
  const gbarpoluFemales = doughnutData
    .filter((gbarpolu) => gbarpolu.county === "Gbarpolu")
    .map((gbarpolu) => gbarpolu.totalFemales)
    .reduce((gbarpolu, gbarpoluFemales) => (gbarpolu += gbarpoluFemales), null) +
    doughnutProject
      .filter((gbarpolu) => gbarpolu.county === "Gbarpolu")
      .map((gbarpolu) => gbarpolu.totalFemales)
      .reduce((gbarpolu, gbarpoluFemales) => (gbarpolu += gbarpoluFemales), null)
    ;
  // End of Gbarpolu County


  GbarpoluChartComponent.datasets[0].data[0] = gbarpoluDaily;

  GbarpoluChartComponent.datasets[0].data[1] = gbarpoluWeekly;

  GbarpoluChartComponent.datasets[0].data[2] = gbarpoluMonthly;

  GbarpoluChartComponent.datasets[0].data[3] = gbarpoluYearly;

  GbarpoluChartComponent.datasets[0].data[4] = gbarpoluMales;

  GbarpoluChartComponent.datasets[0].data[5] = gbarpoluFemales;


  return (
    <React.Fragment>
      <Doughnut data={GbarpoluChartComponent} />
    </React.Fragment>
  );
};

export default GbarpoluDoughnutChart;
