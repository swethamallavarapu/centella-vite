import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from "recharts";

const SampleRadar = () => {
  // Sample data
  const data = [
    { name: "MW", x: 21 },
    { name: "nRig", x: 22 },
    { name: "fChar", x: -32 },
    { name: "nHet", x: -14 },
    { name: "MaxRing", x: -51 },
    { name: "nRing", x: 16 },
    { name: "nRot", x: 7 },
    { name: "TPSA", x: -8 },
    { name: "nHD", x: 9 },
    { name: "nHA", x: 8 },
    { name: "logD", x: 20 },
    { name: "logS", x: 18 },
    { name: "logP", x: 17 },
  ];

  return (
    <RadarChart height={500} width={500} outerRadius="80%" data={data}>
      <PolarGrid />
      <PolarAngleAxis dataKey="name" />
      <PolarRadiusAxis />
      <Radar dataKey="x" stroke="orange" fill="orange" fillOpacity={0.5} />
    </RadarChart>
  );
};

export default SampleRadar;
