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
export const GrandGedehChartComponent = {
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

const GrandGedehDoughnutChart = () => {
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
  // Grand Gedeh County Daily
  const gedehDaily = doughnutData
    .filter((gedeh) => gedeh.county === "Grand Gedeh")
    .map((gedeh) => gedeh.totalDatas)
    .reduce((gedeh, gedehDaily) => (gedeh += gedehDaily), null) +
    doughnutProject
      .filter((gedeh) => gedeh.county === "Grand Gedeh")
      .map((gedeh) => gedeh.totalDatas)
      .reduce((gedeh, gedehDaily) => (gedeh += gedehDaily), null)
    ;

  // Grand Gedeh County Weekly
  const gedehWeekly = doughnutData
    .filter((gedeh) => gedeh.county === "Grand Gedeh")
    .map((gedeh) => gedeh.totalDatas)
    .reduce((gedeh, gedehWeekly) => (gedeh += gedehWeekly), null) +
    doughnutProject
      .filter((gedeh) => gedeh.county === "Grand Gedeh")
      .map((gedeh) => gedeh.totalDatas)
      .reduce((gedeh, gedehWeekly) => (gedeh += gedehWeekly), null)
    ;

  // Grand Gedeh County Monthly
  const gedehMonthly = doughnutData
    .filter((gedeh) => gedeh.county === "Grand Gedeh")
    .map((gedeh) => gedeh.totalDatas)
    .reduce((gedeh, gedehMonthly) => (gedeh += gedehMonthly), null) +
    doughnutProject
      .filter((gedeh) => gedeh.county === "Grand Gedeh")
      .map((gedeh) => gedeh.totalDatas)
      .reduce((gedeh, gedehMonthly) => (gedeh += gedehMonthly), null)
    ;

  // Grand Gedeh County Yearly
  const gedehYearly = doughnutData
    .filter((gedeh) => gedeh.county === "Grand Gedeh")
    .map((gedeh) => gedeh.totalDatas)
    .reduce((gedeh, gedehYearly) => (gedeh += gedehYearly), null) +
    doughnutProject
      .filter((gedeh) => gedeh.county === "Grand Gedeh")
      .map((gedeh) => gedeh.totalDatas)
      .reduce((gedeh, gedehYearly) => (gedeh += gedehYearly), null)
    ;

  // Grand Gedeh County Males
  const gedehMales = doughnutData
    .filter((gedeh) => gedeh.county === "Grand Gedeh")
    .map((gedeh) => gedeh.totalMales)
    .reduce((gedeh, gedehMales) => (gedeh += gedehMales), null) +
    doughnutProject
      .filter((gedeh) => gedeh.county === "Grand Gedeh")
      .map((gedeh) => gedeh.totalMales)
      .reduce((gedeh, gedehMales) => (gedeh += gedehMales), null)
    ;

  // Grand Gedeh County Females
  const gedehFemales = doughnutData
    .filter((gedeh) => gedeh.county === "Grand Gedeh")
    .map((gedeh) => gedeh.totalFemales)
    .reduce((gedeh, gedehFemales) => (gedeh += gedehFemales), null) +
    doughnutProject
      .filter((gedeh) => gedeh.county === "Grand Gedeh")
      .map((gedeh) => gedeh.totalFemales)
      .reduce((gedeh, gedehFemales) => (gedeh += gedehFemales), null)
    ;
  // End of Grand Gedeh County

  GrandGedehChartComponent.datasets[0].data[0] = gedehDaily;

  GrandGedehChartComponent.datasets[0].data[1] = gedehWeekly;

  GrandGedehChartComponent.datasets[0].data[2] = gedehMonthly;

  GrandGedehChartComponent.datasets[0].data[3] = gedehYearly;

  GrandGedehChartComponent.datasets[0].data[4] = gedehMales;

  GrandGedehChartComponent.datasets[0].data[5] = gedehFemales;


  return (
    <React.Fragment>
      <Doughnut data={GrandGedehChartComponent} />
    </React.Fragment>
  );
};

export default GrandGedehDoughnutChart;
