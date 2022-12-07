import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Chart as ChartJS,
  ArcElement,
  // Animation,
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
  // Scale,
} from "chart.js";
import {
  // Doughnut,
  Line,
  // Bar,
  // Pie,
  // Bubble,
  // PolarArea,
  // Radar,
  // Scatter,
} from "react-chartjs-2";

ChartJS.register(
  ArcElement,
  // Animation,
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
  // Scale
);

// const labels = Utils.months({ count: 15 });
export const LineChartComponent = {
  labels: [
    "Bomi",
    "Bong",
    "Gbarpolu",
    "Grand Bassa",
    "Grand Cape Mount",
    "Grand Gedeh",
    "Grand Kru",
    "Lofa",
    "Margibi",
    "Maryland",
    "Montserrado",
    "Nimba",
    "River Gee",
    "Rivercess",
    "Sinoe",
  ],
  datasets: [
    {
      label: "Daily Enrollment Activities",
      data: [],
      fill: true,
      borderColor: [
        "rgb(255, 99, 132)",
        "rgb(255, 159, 64)",
        "rgb(255, 205, 86)",
        "rgb(75, 192, 192)",
        "rgb(54, 162, 235)",
        "rgb(153, 102, 255)",
        "rgb(210, 203, 207)",
        "rgb(220, 203, 207)",
        "rgb(230, 203, 207)",
        "rgb(240, 203, 207)",
        "rgb(250, 203, 207)",
        "rgb(260, 203, 207)",
        "rgb(270, 203, 207)",
        "rgb(280, 203, 207)",
        "rgb(290, 203, 207)",
      ],
      borderWidth: 3,
      tension: 0.1,
    },
  ],
};

export const options = {
  animations: {
    tension: {
      duration: 1000,
      easing: "linear",
      from: 1,
      to: 0,
      loop: true,
    },
  },
}

// Animation Configuration
// const config = {
//   type: "line",
//   data: LineChartComponent,
//   options: {
//     animations: {
//       tension: {
//         duration: 1000,
//         easing: "linear",
//         from: 1,
//         to: 0,
//         loop: true,
//       },
//     },
//     scales: {
//       y: {
//         // defining min and max so hiding the dataset does not change scale range
//         min: 0,
//         max: 100,
//       },
//     },
//   },
// };
// End of Animation Configuration

const LineChart = () => {
  // Fetching Data from backend
  const [lineData, showLineData] = useState([]);
  const [lineProject, showLineProject] = useState([]);

  // Fetch Data
  useEffect(() => {
    axios.get("http://localhost:5000/datas").then((lineChartData) => {
      showLineData(lineChartData.data);
    });
  }, []);

  // Fetch Project
  useEffect(() => {
    axios.get("http://localhost:5000/projects").then((lineChartData) => {
      showLineProject(lineChartData.data);
    });
  }, []);

  // Indivisual County logic
  // Bomi County
  const bomiCounty = lineData
    .filter((bomi) => bomi.county === "Bomi")
    .map((bomi) => bomi.totalDatas)
    .reduce((bomi, bomiCurrent) => (bomi += bomiCurrent), null) +
    lineProject
      .filter((bomi) => bomi.county === "Bomi")
      .map((bomi) => bomi.totalDatas)
      .reduce((bomi, bomiCurrent) => (bomi += bomiCurrent), null)
    ;

  console.log(bomiCounty);

  // Bong County
  const bongCounty = lineData
    .filter((bong) => bong.county === "Bong")
    .map((bong) => bong.totalDatas)
    .reduce((bong, bongCurrent) => (bong += bongCurrent), null) +
    lineProject
      .filter((bong) => bong.county === "Bong")
      .map((bong) => bong.totalDatas)
      .reduce((bong, bongCurrent) => (bong += bongCurrent), null);

  console.log(bongCounty);

  // Gbarpolu County
  const gbarpoluCounty = lineData
    .filter((gbarpolu) => gbarpolu.county === "Gbarpolu")
    .map((gbarpolu) => gbarpolu.totalDatas)
    .reduce((gbarpolu, gbarpoluCurrent) => (gbarpolu += gbarpoluCurrent), null) +
    lineProject
      .filter((gbarpolu) => gbarpolu.county === "Gbarpolu")
      .map((gbarpolu) => gbarpolu.totalDatas)
      .reduce((gbarpolu, gbarpoluCurrent) => (gbarpolu += gbarpoluCurrent), null)
    ;

  console.log(gbarpoluCounty);

  // Gbarpolu County
  const bassaCounty = lineData
    .filter((bassa) => bassa.county === "Grand Bassa")
    .map((bassa) => bassa.totalDatas)
    .reduce((bassa, bassaCurrent) => (bassa += bassaCurrent), null) +
    lineProject
      .filter((bassa) => bassa.county === "Grand Bassa")
      .map((bassa) => bassa.totalDatas)
      .reduce((bassa, bassaCurrent) => (bassa += bassaCurrent), null)
    ;

  console.log(bassaCounty);

  // Grand Cape Mount County
  const capeMountCounty = lineData
    .filter((capeMount) => capeMount.county === "Grand Cape Mount")
    .map((capeMount) => capeMount.totalDatas)
    .reduce(
      (capeMount, capeMountCurrent) => (capeMount += capeMountCurrent),
      null
    ) +
    lineProject
      .filter((capeMount) => capeMount.county === "Grand Cape Mount")
      .map((capeMount) => capeMount.totalDatas)
      .reduce(
        (capeMount, capeMountCurrent) => (capeMount += capeMountCurrent),
        null
      )
    ;

  console.log(capeMountCounty);

  // Grand Gedeh County
  const gedehCounty = lineData
    .filter((gedeh) => gedeh.county === "Grand Gedeh")
    .map((gedeh) => gedeh.totalDatas)
    .reduce((gedeh, gedehCurrent) => (gedeh += gedehCurrent), null) +
    lineProject
      .filter((gedeh) => gedeh.county === "Grand Gedeh")
      .map((gedeh) => gedeh.totalDatas)
      .reduce((gedeh, gedehCurrent) => (gedeh += gedehCurrent), null)
    ;

  console.log(gedehCounty);

  // Grand Kru County
  const kruCounty = lineData
    .filter((kru) => kru.county === "Grand Kru")
    .map((kru) => kru.totalDatas)
    .reduce((kru, kruCurrent) => (kru += kruCurrent), null) +
    lineProject
      .filter((kru) => kru.county === "Grand Kru")
      .map((kru) => kru.totalDatas)
      .reduce((kru, kruCurrent) => (kru += kruCurrent), null)
    ;

  console.log(kruCounty);

  // Lofa County
  const lofaCounty = lineData
    .filter((lofa) => lofa.county === "Lofa")
    .map((lofa) => lofa.totalDatas)
    .reduce((lofa, lofaCurrent) => (lofa += lofaCurrent), null) +
    lineProject
      .filter((lofa) => lofa.county === "Lofa")
      .map((lofa) => lofa.totalDatas)
      .reduce((lofa, lofaCurrent) => (lofa += lofaCurrent), null)
    ;

  console.log(lofaCounty);

  // Margibi County
  const margibiCounty = lineData
    .filter((margibi) => margibi.county === "Margibi")
    .map((margibi) => margibi.totalDatas)
    .reduce((margibi, margibiCurrent) => (margibi += margibiCurrent), null) +
    lineProject
      .filter((margibi) => margibi.county === "Margibi")
      .map((margibi) => margibi.totalDatas)
      .reduce((margibi, margibiCurrent) => (margibi += margibiCurrent), null)
    ;

  console.log(margibiCounty);

  // Maryland County
  const marylandCounty = lineData
    .filter((maryland) => maryland.county === "Maryland")
    .map((maryland) => maryland.totalDatas)
    .reduce((maryland, marylandCurrent) => (maryland += marylandCurrent), null) +
    lineProject
      .filter((maryland) => maryland.county === "Maryland")
      .map((maryland) => maryland.totalDatas)
      .reduce((maryland, marylandCurrent) => (maryland += marylandCurrent), null)
    ;

  console.log(marylandCounty);

  // Montserrado County
  const montserradoCounty = lineData
    .filter((montserrado) => montserrado.county === "Montserrado")
    .map((montserrado) => montserrado.totalDatas)
    .reduce(
      (montserrado, montserradoCurrent) => (montserrado += montserradoCurrent),
      null
    ) +
    lineProject
      .filter((montserrado) => montserrado.county === "Montserrado")
      .map((montserrado) => montserrado.totalDatas)
      .reduce(
        (montserrado, montserradoCurrent) => (montserrado += montserradoCurrent),
        null
      )
    ;

  console.log(montserradoCounty);

  // Nimba County
  const nimbaCounty = lineData
    .filter((nimba) => nimba.county === "Nimba")
    .map((nimba) => nimba.totalDatas)
    .reduce((nimba, nimbaCurrent) => (nimba += nimbaCurrent), null) +
    lineProject
      .filter((nimba) => nimba.county === "Nimba")
      .map((nimba) => nimba.totalDatas)
      .reduce((nimba, nimbaCurrent) => (nimba += nimbaCurrent), null)
    ;

  console.log(nimbaCounty);

  // River Gee County
  const rivergeeCounty = lineData
    .filter((rivergee) => rivergee.county === "River Gee")
    .map((rivergee) => rivergee.totalDatas)
    .reduce((rivergee, rivergeeCurrent) => (rivergee += rivergeeCurrent), null) +
    lineProject
      .filter((rivergee) => rivergee.county === "River Gee")
      .map((rivergee) => rivergee.totalDatas)
      .reduce((rivergee, rivergeeCurrent) => (rivergee += rivergeeCurrent), null)
    ;

  console.log(rivergeeCounty);

  // Rivercess County
  const rivercessCounty = lineData
    .filter((rivercess) => rivercess.county === "Rivercess")
    .map((rivercess) => rivercess.totalDatas)
    .reduce(
      (rivercess, rivercessCurrent) => (rivercess += rivercessCurrent),
      null
    ) +
    lineProject
      .filter((rivercess) => rivercess.county === "Rivercess")
      .map((rivercess) => rivercess.totalDatas)
      .reduce(
        (rivercess, rivercessCurrent) => (rivercess += rivercessCurrent),
        null
      )
    ;

  console.log(rivercessCounty);

  // Sinoe County
  const sinoeCounty = lineData
    .filter((sinoe) => sinoe.county === "Sinoe")
    .map((sinoe) => sinoe.totalDatas)
    .reduce((sinoe, sinoeCurrent) => (sinoe += sinoeCurrent), null) +
    lineProject
      .filter((sinoe) => sinoe.county === "Sinoe")
      .map((sinoe) => sinoe.totalDatas)
      .reduce((sinoe, sinoeCurrent) => (sinoe += sinoeCurrent), null)
    ;

  console.log(sinoeCounty);

  LineChartComponent.datasets[0].data[0] = bomiCounty;

  LineChartComponent.datasets[0].data[1] = bongCounty;

  LineChartComponent.datasets[0].data[2] = gbarpoluCounty;

  LineChartComponent.datasets[0].data[3] = bassaCounty;

  LineChartComponent.datasets[0].data[4] = capeMountCounty;

  LineChartComponent.datasets[0].data[5] = gedehCounty;

  LineChartComponent.datasets[0].data[6] = kruCounty;

  LineChartComponent.datasets[0].data[7] = lofaCounty;

  LineChartComponent.datasets[0].data[8] = margibiCounty;

  LineChartComponent.datasets[0].data[9] = marylandCounty;

  LineChartComponent.datasets[0].data[10] = montserradoCounty;

  LineChartComponent.datasets[0].data[11] = nimbaCounty;

  LineChartComponent.datasets[0].data[12] = rivergeeCounty;

  LineChartComponent.datasets[0].data[13] = rivercessCounty;

  LineChartComponent.datasets[0].data[14] = sinoeCounty;

  console.log(LineChartComponent);

  return (
    <React.Fragment>
      <Line options={options} data={LineChartComponent} />
    </React.Fragment>
  );
};

export default LineChart;
