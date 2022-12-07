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
  // Line,
  // Bar,
  // Pie,
  // Bubble,
  PolarArea,
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

const PolarAreaChartComponent = {
  labels: [
    "Bomi",
    "Bong",
    "Gbarpolu",
    "Grand Bassa",
    "Grand Cape Mount",
    "Grand Gedeh",
    "Grand kru",
    "Lofa",
    "Margibi",
    "Maryland",
    "Mont NIR HQ",
    "Mont Lonestar MTN Congo Town",
    "Mont Lonestar MTN Broad Street",
    "Mont Lonestar MTN Redlight",
    "Mont Orange Liberia Byepass",
    "Mont Orange Liberia 13th Street",
    "Mont Tweh Farm",
    "Mont SKD",
    "Mont Greenville Town Hall",
    "Mont Gogbachop Market",
    "Mont Waterside Market",
    "Nimba Ganta",
    "Nimba Sanniquellie",
    "River Gee",
    "Rivercess",
    "Sinoe",


  ],
  datasets: [
    {
      label: "Enrollment Activities Per Team",
      data: [],
      backgroundColor: [
        "#808080",
        "#FF0000",
        "#800000",
        "#C0C0C0",
        "#FFFF00",
        "#808000",
        "#00FF00",
        "#008000",
        "#00FFFF",
        "#008080",
        "	#0000FF",
        "#000080",
        "#FF00FF",
        "#800080",
        "#004d4d",
        "#DEB887",
        "#D2691E",
        "#6495ED",
        "#ADFF2F",
        "#FFB6C1",
        "#66CDAA",
        "#3CB371",
        "#6B8E23",
        "#808000",
        "#FF6347",
        "#008080",
      ],
    },
  ],
};

const PolarAreaChart = () => {
  // Fetching Data from backend
  const [polarAreaData, showPolarAreaData] = useState([]);
  const [polarAreaProject, showPolarAreaProject] = useState([]);

  // Fetch Data
  useEffect(() => {
    axios.get("http://localhost:5000/datas").then((polarChartData) => {
      showPolarAreaData(polarChartData.data);
    });
  }, []);

  // Fetch Project
  useEffect(() => {
    axios.get("http://localhost:5000/projects").then((polarChartData) => {
      showPolarAreaProject(polarChartData.data);
    });
  }, []);

  // Bomi Center
  const bomiCenter = polarAreaData
    .filter(
      (bomi) =>
        bomi.county === "Bomi" &&
        bomi.enrollmentCenter === "Bomi"
    )
    .map((bomi) => bomi.totalDatas)
    .reduce((bomi, omiCenter) => (bomi += omiCenter), null) +
    polarAreaProject
      .filter(
        (bomi) =>
          bomi.county === "Bomi" &&
          bomi.enrollmentCenter === "Bomi"
      )
      .map((bomi) => bomi.totalDatas)
      .reduce((bomi, omiCenter) => (bomi += omiCenter), null)
    ;

  // Bong Center
  const bongCenter = polarAreaData
    .filter(
      (bong) => bong.county === "Bong" && bong.enrollmentCenter === "Bong"
    )
    .map((bong) => bong.totalDatas)
    .reduce((bong, bongCenter) => (bong += bongCenter), null) +
    polarAreaProject
      .filter(
        (bong) => bong.county === "Bong" && bong.enrollmentCenter === "Bong"
      )
      .map((bong) => bong.totalDatas)
      .reduce((bong, bongCenter) => (bong += bongCenter), null)
    ;

  // Gbarpolu Center
  const gbarpoluCenter = polarAreaData
    .filter(
      (gbarpolu) =>
        gbarpolu.county === "Gbarpolu" &&
        gbarpolu.enrollmentCenter === "Gbarpolu"
    )
    .map((gbarpolu) => gbarpolu.totalDatas)
    .reduce((gbarpolu, gbarpoluCenter) => (gbarpolu += gbarpoluCenter), null) +
    polarAreaProject
      .filter(
        (gbarpolu) =>
          gbarpolu.county === "Gbarpolu" &&
          gbarpolu.enrollmentCenter === "Gbarpolu"
      )
      .map((gbarpolu) => gbarpolu.totalDatas)
      .reduce((gbarpolu, gbarpoluCenter) => (gbarpolu += gbarpoluCenter), null)
    ;

  // Grand Bassa Center
  const bassaCenter = polarAreaData
    .filter(
      (bassa) =>
        bassa.county === "Grand Bassa" &&
        bassa.enrollmentCenter === "Grand Bassa"
    )
    .map((bassa) => bassa.totalDatas)
    .reduce((bassa, bassaCenter) => (bassa += bassaCenter), null) +
    polarAreaProject
      .filter(
        (bassa) =>
          bassa.county === "Grand Bassa" &&
          bassa.enrollmentCenter === "Grand Bassa"
      )
      .map((bassa) => bassa.totalDatas)
      .reduce((bassa, bassaCenter) => (bassa += bassaCenter), null)
    ;

  // Grand Cape Mount Center
  const capeMountCenter = polarAreaData
    .filter(
      (capeMount) =>
        capeMount.county === "Grand Cape Mount" &&
        capeMount.enrollmentCenter === "Grand Cape Mount"
    )
    .map((capeMount) => capeMount.totalDatas)
    .reduce((capeMount, capeMountCenter) => (capeMount += capeMountCenter), null) +
    polarAreaProject
      .filter(
        (capeMount) =>
          capeMount.county === "Grand Cape Mount" &&
          capeMount.enrollmentCenter === "Grand Cape Mount"
      )
      .map((capeMount) => capeMount.totalDatas)
      .reduce((capeMount, capeMountCenter) => (capeMount += capeMountCenter), null)
    ;

  // Grand Gedeh Center
  const grandGedehCenter = polarAreaData
    .filter(
      (gedeh) =>
        gedeh.county === "Grand Gedeh" &&
        gedeh.enrollmentCenter === "Grand Gedeh"
    )
    .map((gedeh) => gedeh.totalDatas)
    .reduce((gedeh, grandGedehCenter) => (gedeh += grandGedehCenter), null) +
    polarAreaProject
      .filter(
        (gedeh) =>
          gedeh.county === "Grand Gedeh" &&
          gedeh.enrollmentCenter === "Grand Gedeh"
      )
      .map((gedeh) => gedeh.totalDatas)
      .reduce((gedeh, grandGedehCenter) => (gedeh += grandGedehCenter), null)
    ;

  // Grand Kru Center
  const grandKruCenter = polarAreaData
    .filter(
      (kru) =>
        kru.county === "Grand Kru" &&
        kru.enrollmentCenter === "Grand Kru"
    )
    .map((kru) => kru.totalDatas)
    .reduce((kru, grandKruCenter) => (kru += grandKruCenter), null) +
    polarAreaProject
      .filter(
        (kru) =>
          kru.county === "Grand Kru" &&
          kru.enrollmentCenter === "Grand Kru"
      )
      .map((kru) => kru.totalDatas)
      .reduce((kru, grandKruCenter) => (kru += grandKruCenter), null)
    ;

  // Lofa Center
  const lofaCenter = polarAreaData
    .filter(
      (lofa) =>
        lofa.county === "Lofa" &&
        lofa.enrollmentCenter === "Lofa"
    )
    .map((lofa) => lofa.totalDatas)
    .reduce((lofa, lofaCenter) => (lofa += lofaCenter), null) +
    polarAreaProject
      .filter(
        (lofa) =>
          lofa.county === "Lofa" &&
          lofa.enrollmentCenter === "Lofa"
      )
      .map((lofa) => lofa.totalDatas)
      .reduce((lofa, lofaCenter) => (lofa += lofaCenter), null)
    ;

  // Margibi Center
  const margibiCenter = polarAreaData
    .filter(
      (margibi) =>
        margibi.county === "Margibi" &&
        margibi.enrollmentCenter === "Margibi"
    )
    .map((margibi) => margibi.totalDatas)
    .reduce((margibi, margibiCenter) => (margibi += margibiCenter), null) +
    polarAreaProject
      .filter(
        (margibi) =>
          margibi.county === "Margibi" &&
          margibi.enrollmentCenter === "Margibi"
      )
      .map((margibi) => margibi.totalDatas)
      .reduce((margibi, margibiCenter) => (margibi += margibiCenter), null)
    ;

  // Maryland Center
  const marylandCenter = polarAreaData
    .filter(
      (maryland) =>
        maryland.county === "Maryland" &&
        maryland.enrollmentCenter === "Maryland"
    )
    .map((maryland) => maryland.totalDatas)
    .reduce((maryland, marylandCenter) => (maryland += marylandCenter), null) +
    polarAreaProject
      .filter(
        (maryland) =>
          maryland.county === "Maryland" &&
          maryland.enrollmentCenter === "Maryland"
      )
      .map((maryland) => maryland.totalDatas)
      .reduce((maryland, marylandCenter) => (maryland += marylandCenter), null)
    ;

  // Montserrado HQ Center
  const montserradoHQ = polarAreaData
    .filter(
      (montserrado) =>
        montserrado.county === "Montserrado" &&
        montserrado.enrollmentCenter === "Mont NIR HQ"
    )
    .map((montserrado) => montserrado.totalDatas)
    .reduce((montserrado, montserradoHQ) => (montserrado += montserradoHQ), null) +
    polarAreaProject
      .filter(
        (montserrado) =>
          montserrado.county === "Montserrado" &&
          montserrado.enrollmentCenter === "Mont NIR HQ"
      )
      .map((montserrado) => montserrado.totalDatas)
      .reduce((montserrado, montserradoHQ) => (montserrado += montserradoHQ), null)
    ;

  // Montserrado Lonestar MTN Congo Town Center
  const montMTNCongoTown = polarAreaData
    .filter(
      (mtnCongoTown) =>
        mtnCongoTown.county === "Montserrado" &&
        mtnCongoTown.enrollmentCenter === "Mont Lonestar MTN Congo Town"
    )
    .map((mtnCongoTown) => mtnCongoTown.totalDatas)
    .reduce((mtnCongoTown, montMTNCongoTown) => (mtnCongoTown += montMTNCongoTown), null) +
    polarAreaProject
      .filter(
        (mtnCongoTown) =>
          mtnCongoTown.county === "Montserrado" &&
          mtnCongoTown.enrollmentCenter === "Mont Lonestar MTN Congo Town"
      )
      .map((mtnCongoTown) => mtnCongoTown.totalDatas)
      .reduce((mtnCongoTown, montMTNCongoTown) => (mtnCongoTown += montMTNCongoTown), null)
    ;

  // Montserrado Lonestar MTN Broad Street Center
  const montMTNBroadStreet = polarAreaData
    .filter(
      (mtnBroadStreet) =>
        mtnBroadStreet.county === "Montserrado" &&
        mtnBroadStreet.enrollmentCenter === "Mont Lonestar MTN Broad Street"
    )
    .map((mtnBroadStreet) => mtnBroadStreet.totalDatas)
    .reduce((mtnBroadStreet, montMTNBroadStreet) => (mtnBroadStreet += montMTNBroadStreet), null) +
    polarAreaProject
      .filter(
        (mtnBroadStreet) =>
          mtnBroadStreet.county === "Montserrado" &&
          mtnBroadStreet.enrollmentCenter === "Mont Lonestar MTN Broad Street"
      )
      .map((mtnBroadStreet) => mtnBroadStreet.totalDatas)
      .reduce((mtnBroadStreet, montMTNBroadStreet) => (mtnBroadStreet += montMTNBroadStreet), null)
    ;

  // Montserrado Lonestar MTN Redlight Center
  const montMTNRedlight = polarAreaData
    .filter(
      (mtnRedlight) =>
        mtnRedlight.county === "Montserrado" &&
        mtnRedlight.enrollmentCenter === "Mont Lonestar MTN Redlight"
    )
    .map((mtnRedlight) => mtnRedlight.totalDatas)
    .reduce((mtnRedlight, montMTNRedlight) => (mtnRedlight += montMTNRedlight), null) +
    polarAreaProject
      .filter(
        (mtnRedlight) =>
          mtnRedlight.county === "Montserrado" &&
          mtnRedlight.enrollmentCenter === "Mont Lonestar MTN Redlight"
      )
      .map((mtnRedlight) => mtnRedlight.totalDatas)
      .reduce((mtnRedlight, montMTNRedlight) => (mtnRedlight += montMTNRedlight), null)
    ;

  // Montserrado Orange Liberia Byepass Center
  const montOrangeByepass = polarAreaData
    .filter(
      (orangeByepass) =>
        orangeByepass.county === "Montserrado" &&
        orangeByepass.enrollmentCenter === "Mont Orange Liberia Byepass"
    )
    .map((orangeByepass) => orangeByepass.totalDatas)
    .reduce((orangeByepass, montOrangeByepass) => (orangeByepass += montOrangeByepass), null) +
    polarAreaProject
      .filter(
        (orangeByepass) =>
          orangeByepass.county === "Montserrado" &&
          orangeByepass.enrollmentCenter === "Mont Orange Liberia Byepass"
      )
      .map((orangeByepass) => orangeByepass.totalDatas)
      .reduce((orangeByepass, montOrangeByepass) => (orangeByepass += montOrangeByepass), null)
    ;

  // Montserrado Orange Liberia 13th Street Center
  const montOrangeThirteenStreet = polarAreaData
    .filter(
      (orangeThirteenStreet) =>
        orangeThirteenStreet.county === "Montserrado" &&
        orangeThirteenStreet.enrollmentCenter === "Mont Orange Liberia 13th Street"
    )
    .map((orangeThirteenStreet) => orangeThirteenStreet.totalDatas)
    .reduce((orangeThirteenStreet, montOrangeThirteenStreet) => (orangeThirteenStreet += montOrangeThirteenStreet), null) +
    polarAreaProject
      .filter(
        (orangeThirteenStreet) =>
          orangeThirteenStreet.county === "Montserrado" &&
          orangeThirteenStreet.enrollmentCenter === "Mont Orange Liberia 13th Street"
      )
      .map((orangeThirteenStreet) => orangeThirteenStreet.totalDatas)
      .reduce((orangeThirteenStreet, montOrangeThirteenStreet) => (orangeThirteenStreet += montOrangeThirteenStreet), null)
    ;

  // Montserrado Tweh Farm Center
  const montTwehFarm = polarAreaData
    .filter(
      (twehFarm) =>
        twehFarm.county === "Montserrado" &&
        twehFarm.enrollmentCenter === "Mont Tweh Farm"
    )
    .map((twehFarm) => twehFarm.totalDatas)
    .reduce((twehFarm, montTwehFarm) => (twehFarm += montTwehFarm), null) +
    polarAreaProject
      .filter(
        (twehFarm) =>
          twehFarm.county === "Montserrado" &&
          twehFarm.enrollmentCenter === "Mont Tweh Farm"
      )
      .map((twehFarm) => twehFarm.totalDatas)
      .reduce((twehFarm, montTwehFarm) => (twehFarm += montTwehFarm), null)
    ;

  // Montserrado SKD Center
  const montSkd = polarAreaData
    .filter(
      (skd) =>
        skd.county === "Montserrado" &&
        skd.enrollmentCenter === "Mont SKD"
    )
    .map((skd) => skd.totalDatas)
    .reduce((skd, montSkd) => (skd += montSkd), null) +
    polarAreaProject
      .filter(
        (skd) =>
          skd.county === "Montserrado" &&
          skd.enrollmentCenter === "Mont SKD"
      )
      .map((skd) => skd.totalDatas)
      .reduce((skd, montSkd) => (skd += montSkd), null)
    ;

  // Montserrado Greenville Town Hall Center
  const montGreenville = polarAreaData
    .filter(
      (greenville) =>
        greenville.county === "Montserrado" &&
        greenville.enrollmentCenter === "Mont Greenville Town Hall"
    )
    .map((greenville) => greenville.totalDatas)
    .reduce((greenville, montGreenville) => (greenville += montGreenville), null) +
    polarAreaProject
      .filter(
        (greenville) =>
          greenville.county === "Montserrado" &&
          greenville.enrollmentCenter === "Mont Greenville Town Hall"
      )
      .map((greenville) => greenville.totalDatas)
      .reduce((greenville, montGreenville) => (greenville += montGreenville), null)
    ;

  // Montserrado Gogbachop Center
  const montGogbachop = polarAreaData
    .filter(
      (gogbachop) =>
        gogbachop.county === "Montserrado" &&
        gogbachop.enrollmentCenter === "Mont Gogbachop Market"
    )
    .map((gogbachop) => gogbachop.totalDatas)
    .reduce((gogbachop, montGogbachop) => (gogbachop += montGogbachop), null)
  polarAreaProject
    .filter(
      (gogbachop) =>
        gogbachop.county === "Montserrado" &&
        gogbachop.enrollmentCenter === "Mont Gogbachop Market"
    )
    .map((gogbachop) => gogbachop.totalDatas)
    .reduce((gogbachop, montGogbachop) => (gogbachop += montGogbachop), null)
    ;

  // Montserrado Waterside Center
  const montWaterside = polarAreaData
    .filter(
      (waterside) =>
        waterside.county === "Montserrado" &&
        waterside.enrollmentCenter === "Mont Waterside Market"
    )
    .map((waterside) => waterside.totalDatas)
    .reduce((waterside, montWaterside) => (waterside += montWaterside), null) +
    polarAreaProject
      .filter(
        (waterside) =>
          waterside.county === "Montserrado" &&
          waterside.enrollmentCenter === "Mont Waterside Market"
      )
      .map((waterside) => waterside.totalDatas)
      .reduce((waterside, montWaterside) => (waterside += montWaterside), null)
    ;

  // Montserrado Nimba Ganta Center
  const montNimbaGanta = polarAreaData
    .filter(
      (ganta) =>
        ganta.county === "Nimba" &&
        ganta.enrollmentCenter === "Nimba Ganta"
    )
    .map((ganta) => ganta.totalDatas)
    .reduce((ganta, montNimbaGanta) => (ganta += montNimbaGanta), null) +
    polarAreaProject
      .filter(
        (ganta) =>
          ganta.county === "Nimba" &&
          ganta.enrollmentCenter === "Nimba Ganta"
      )
      .map((ganta) => ganta.totalDatas)
      .reduce((ganta, montNimbaGanta) => (ganta += montNimbaGanta), null)
    ;

  // Montserrado Nimba Ganta Center
  const montNimbaSanniquellie = polarAreaData
    .filter(
      (sanniquellie) =>
        sanniquellie.county === "Nimba" &&
        sanniquellie.enrollmentCenter === "Nimba Sanniquellie"
    )
    .map((sanniquellie) => sanniquellie.totalDatas)
    .reduce((sanniquellie, montNimbaSanniquellie) => (sanniquellie += montNimbaSanniquellie), null) +
    polarAreaProject
      .filter(
        (sanniquellie) =>
          sanniquellie.county === "Nimba" &&
          sanniquellie.enrollmentCenter === "Nimba Sanniquellie"
      )
      .map((sanniquellie) => sanniquellie.totalDatas)
      .reduce((sanniquellie, montNimbaSanniquellie) => (sanniquellie += montNimbaSanniquellie), null)
    ;

  // River Gee Center
  const rivergeeCenter = polarAreaData
    .filter(
      (rivergee) =>
        rivergee.county === "River Gee" &&
        rivergee.enrollmentCenter === "River Gee"
    )
    .map((rivergee) => rivergee.totalDatas)
    .reduce((rivergee, rivergeeCenter) => (rivergee += rivergeeCenter), null) +
    polarAreaProject
      .filter(
        (rivergee) =>
          rivergee.county === "River Gee" &&
          rivergee.enrollmentCenter === "River Gee"
      )
      .map((rivergee) => rivergee.totalDatas)
      .reduce((rivergee, rivergeeCenter) => (rivergee += rivergeeCenter), null)
    ;

  // Rivercess Center
  const rivercessCenter = polarAreaData
    .filter(
      (rivercess) =>
        rivercess.county === "Rivercess" &&
        rivercess.enrollmentCenter === "Rivercess"
    )
    .map((rivercess) => rivercess.totalDatas)
    .reduce((rivercess, rivercessCenter) => (rivercess += rivercessCenter), null) +
    polarAreaProject
      .filter(
        (rivercess) =>
          rivercess.county === "Rivercess" &&
          rivercess.enrollmentCenter === "Rivercess"
      )
      .map((rivercess) => rivercess.totalDatas)
      .reduce((rivercess, rivercessCenter) => (rivercess += rivercessCenter), null)
    ;

  // Sinoe Center
  const sinoeCenter = polarAreaData
    .filter(
      (sinoe) =>
        sinoe.county === "Sinoe" &&
        sinoe.enrollmentCenter === "Sinoe"
    )
    .map((sinoe) => sinoe.totalDatas)
    .reduce((sinoe, sinoeCenter) => (sinoe += sinoeCenter), null) +
    polarAreaProject
      .filter(
        (sinoe) =>
          sinoe.county === "Sinoe" &&
          sinoe.enrollmentCenter === "Sinoe"
      )
      .map((sinoe) => sinoe.totalDatas)
      .reduce((sinoe, sinoeCenter) => (sinoe += sinoeCenter), null)
    ;

  // Pushing Data to Array
  PolarAreaChartComponent.datasets[0].data[0] = bomiCenter;

  PolarAreaChartComponent.datasets[0].data[1] = bongCenter;

  PolarAreaChartComponent.datasets[0].data[2] = gbarpoluCenter;

  PolarAreaChartComponent.datasets[0].data[3] = bassaCenter;

  PolarAreaChartComponent.datasets[0].data[4] = capeMountCenter;

  PolarAreaChartComponent.datasets[0].data[5] = grandGedehCenter;

  PolarAreaChartComponent.datasets[0].data[6] = grandKruCenter;

  PolarAreaChartComponent.datasets[0].data[7] = lofaCenter;

  PolarAreaChartComponent.datasets[0].data[8] = margibiCenter;

  PolarAreaChartComponent.datasets[0].data[9] = marylandCenter;

  PolarAreaChartComponent.datasets[0].data[10] = montserradoHQ;

  PolarAreaChartComponent.datasets[0].data[11] = montMTNCongoTown;

  PolarAreaChartComponent.datasets[0].data[12] = montMTNBroadStreet;

  PolarAreaChartComponent.datasets[0].data[13] = montMTNRedlight;

  PolarAreaChartComponent.datasets[0].data[14] = montOrangeByepass;

  PolarAreaChartComponent.datasets[0].data[15] = montOrangeThirteenStreet;

  PolarAreaChartComponent.datasets[0].data[16] = montTwehFarm;

  PolarAreaChartComponent.datasets[0].data[17] = montSkd;

  PolarAreaChartComponent.datasets[0].data[18] = montGreenville;

  PolarAreaChartComponent.datasets[0].data[19] = montGogbachop;

  PolarAreaChartComponent.datasets[0].data[20] = montWaterside;

  PolarAreaChartComponent.datasets[0].data[21] = montNimbaGanta;

  PolarAreaChartComponent.datasets[0].data[22] = montNimbaSanniquellie;

  PolarAreaChartComponent.datasets[0].data[23] = rivergeeCenter;

  PolarAreaChartComponent.datasets[0].data[24] = rivercessCenter;

  PolarAreaChartComponent.datasets[0].data[25] = sinoeCenter;

  console.log(PolarAreaChartComponent);


  return (
    <React.Fragment>
      <PolarArea data={PolarAreaChartComponent} />
    </React.Fragment>
  );
};

export default PolarAreaChart;
