import React from "react";
import { arc } from "d3";
import { getWeeksBetweenDates } from "../../ParkReviewScreen/helper";

// overall_rating: 5,
// traveler_type: ,
// adults: ,
// adults_ages_low: ,
// adults_ages_high: ,
// kids: ,
// kids_ages_low: ,
// kids_ages_high: ,
// fitness_level: ,
// trip_activity_level:
const DUMMYREVIEWS = [
  {
    trip_start: new Date("August 25, 2023 00:00:00"),
    trip_end: new Date("August 28, 2023 00:00:00"),
    duration: Math.ceil(
      Math.abs(
        new Date("August 25, 2023 00:00:00") -
          new Date("August 28, 2023 00:00:00")
      ) /
        (24 * 60 * 60 * 1000)
    ),
    avg_week: getWeeksBetweenDates(
      new Date("August 25, 2023 00:00:00"),
      new Date("August 28, 2023 00:00:00")
    ),
    overall_rating: 5,
  },
  {
    trip_start: new Date("May 20, 2023 00:00:00"),
    trip_end: new Date("May 22, 2023 00:00:00"),
    duration: Math.ceil(
      Math.abs(
        new Date("May 20, 2023 00:00:00") - new Date("May 22, 2023 00:00:00")
      ) /
        (24 * 60 * 60 * 1000)
    ),
    avg_week: getWeeksBetweenDates(
      new Date("May 20, 2023 00:00:00"),
      new Date("May 22, 2023 00:00:00")
    ),
    overall_rating: 3,
  },
  {
    trip_start: new Date("July 10, 2023 00:00:00"),
    trip_end: new Date("July 14, 2023 00:00:00"),
    duration: Math.ceil(
      Math.abs(
        new Date("July 10, 2023 00:00:00") - new Date("July 14, 2023 00:00:00")
      ) /
        (24 * 60 * 60 * 1000)
    ),
    avg_week: getWeeksBetweenDates(
      new Date("July 10, 2023 00:00:00"),
      new Date("July 14, 2023 00:00:00")
    ),
    overall_rating: 4,
  },
  {
    trip_start: new Date("August 12, 2023 00:00:00"),
    trip_end: new Date("August 15, 2023 00:00:00"),
    duration: Math.ceil(
      Math.abs(
        new Date("August 12, 2023 00:00:00") -
          new Date("August 15, 2023 00:00:00")
      ) /
        (24 * 60 * 60 * 1000)
    ),
    avg_week: getWeeksBetweenDates(
      new Date("August 12, 2023 00:00:00"),
      new Date("August 15, 2023 00:00:00")
    ),
    overall_rating: 5,
  },
  {
    trip_start: new Date("August 8, 2023 00:00:00"),
    trip_end: new Date("August 15, 2023 00:00:00"),
    duration: Math.ceil(
      Math.abs(
        new Date("August 8, 2023 00:00:00") -
          new Date("August 15, 2023 00:00:00")
      ) /
        (24 * 60 * 60 * 1000)
    ),
    avg_week: getWeeksBetweenDates(
      new Date("August 8, 2023 00:00:00"),
      new Date("August 15, 2023 00:00:00")
    ),
    overall_rating: 5,
  },
  {
    trip_start: new Date("August 1, 2023 00:00:00"),
    trip_end: new Date("August 3, 2023 00:00:00"),
    duration: Math.ceil(
      Math.abs(
        new Date("August 1, 2023 00:00:00") -
          new Date("August 3, 2023 00:00:00")
      ) /
        (24 * 60 * 60 * 1000)
    ),
    avg_week: getWeeksBetweenDates(
      new Date("August 1, 2023 00:00:00"),
      new Date("August 3, 2023 00:00:00")
    ),
    overall_rating: 4,
  },
  {
    trip_start: new Date("July 25, 2023 00:00:00"),
    trip_end: new Date("July 26, 2023 00:00:00"),
    duration: Math.ceil(
      Math.abs(
        new Date("July 25, 2023 00:00:00") - new Date("July 26, 2023 00:00:00")
      ) /
        (24 * 60 * 60 * 1000)
    ),
    avg_week: getWeeksBetweenDates(
      new Date("July 25, 2023 00:00:00"),
      new Date("July 26, 2023 00:00:00")
    ),
    overall_rating: 4,
  },
  {
    trip_start: new Date("August 15, 2023 00:00:00"),
    trip_end: new Date("August 17, 2023 00:00:00"),
    duration: Math.ceil(
      Math.abs(
        new Date("August 15, 2023 00:00:00") -
          new Date("August 17, 2023 00:00:00")
      ) /
        (24 * 60 * 60 * 1000)
    ),
    avg_week: getWeeksBetweenDates(
      new Date("August 15, 2023 00:00:00"),
      new Date("August 17, 2023 00:00:00")
    ),
    overall_rating: 5,
  },
  {
    trip_start: new Date("August 1, 2023 00:00:00"),
    trip_end: new Date("August 8, 2023 00:00:00"),
    duration: Math.ceil(
      Math.abs(
        new Date("August 1, 2023 00:00:00") -
          new Date("August 8, 2023 00:00:00")
      ) /
        (24 * 60 * 60 * 1000)
    ),
    avg_week: getWeeksBetweenDates(
      new Date("August 1, 2023 00:00:00"),
      new Date("August 8, 2023 00:00:00")
    ),
    overall_rating: 4,
  },
  {
    trip_start: new Date("September 5, 2023 00:00:00"),
    trip_end: new Date("September 10, 2023 00:00:00"),
    duration: Math.ceil(
      Math.abs(
        new Date("September 5, 2023 00:00:00") -
          new Date("September 10, 2023 00:00:00")
      ) /
        (24 * 60 * 60 * 1000)
    ),
    avg_week: getWeeksBetweenDates(
      new Date("September 5, 2023 00:00:00"),
      new Date("September 10, 2023 00:00:00")
    ),
    overall_rating: 5,
  },
];

const width = 700;
const height = 500;
const centerX = width / 2;
const centerY = height / 2;
const strokeWidth = 20;
const eyeOffsetX = 90;
const eyeOffsetY = 90;
const eyeRadius = 30;
const mouthWidth = 20;
const mouthRadius = 140;

const mouthArc = arc()
  .innerRadius(mouthRadius)
  .outerRadius(mouthRadius + mouthWidth)
  .startAngle(Math.PI / 2)
  .endAngle((Math.PI * 3) / 2);

const ParkDataViz = () => {
  return (
    <div>
      <div>
        <p>data viz practice</p>
        <p>data viz practice</p>
        <p>data viz practice</p>
        <p>data viz practice</p>
        <p>data viz practice</p>
        <p>data viz practice</p>
        <svg width={width} height={height}>
          <g transform={`translate(${centerX}, ${centerY})`}>
            <circle
              r={centerY - strokeWidth / 2}
              fill="yellow"
              stroke="black"
              strokeWidth={strokeWidth}
            ></circle>
            <circle
              r={eyeRadius}
              cx={-eyeOffsetX}
              cy={-eyeOffsetY}
              fill="black"
              stroke="black"
              strokeWidth={strokeWidth}
            ></circle>
            <circle
              r={eyeRadius}
              cx={eyeOffsetX}
              cy={-eyeOffsetY}
              fill="black"
              stroke="black"
              strokeWidth={strokeWidth}
            ></circle>
            <path d={mouthArc()} />
          </g>
        </svg>
      </div>
    </div>
  );
};

export default ParkDataViz;
