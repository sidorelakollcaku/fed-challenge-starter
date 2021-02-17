import React from "react";
import Card from "../Card/Card";
import "./Cards.css";
const fakeData = [
  {
    title: "Lake Inniscarra, Ireland—Pyramid",
    thumb: "lake-inniscarra-thumb.jpg",
    trainerThumb: "lake-inniscarra-trainer.jpg",
    time: "30:53",
    distance: 6248,
    workouts: 1,
  },
  {
    title: "Performance Series",
    thumb: "performance-series-thumb.jpg",
    trainerThumb: "performance-series-trainer.jpg",
    workouts: 9,
  },
  {
    title: "Slow Pulls and Fast Intervals",
    thumb: "slow-pulls-thumb.jpg",
    trainerThumb: "slow-pulls-trainer.jpg",
    time: "44:13",
    distance: 9948,
    workouts: 1,
  },
  {
    title: "20 Minutes to Toned",
    thumb: "20-minutes-to-toned-thumb.jpg",
    trainerThumb: "20-minutes-to-toned-trainer.jpg",
    workouts: 12,
  },
  {
    title: "Charles Race, Boston, Massachusetts",
    thumb: "charles-race-thumb.jpg",
    trainerThumb: "charles-race-trainer.jpg",
    time: "36:22",
    distance: 8648,
    workouts: 1,
  },
  {
    title: "Full-Body HIIT Series",
    thumb: "full-body-hiit-thumb.jpg",
    trainerThumb: "lake-inniscarra-trainer.jpg",
    workouts: 12,
  },
  {
    title: "Kafue River, Zambia—Power Stroke Pyramid",
    thumb: "kafue-river-thumb.jpg",
    trainerThumb: "kafue-river-trainer.jpg",
    time: "22:22",
    distance: 4660,
    workouts: 1,
  },
  {
    title: "Shred & Burn Series",
    thumb: "shred-and-burn-thumb.jpg",
    trainerThumb: "shred-and-burn-trainer.jpg",
    workouts: 16,
  },
];

function Cards(props) {
  return (
    <div className="container">
      <div className="container-cards">
        {fakeData.map((m) => (
          <Card
            title={m.title}
            time={m.time}
            distance={m.distance}
            thumbPic={m.thumb}
            userPic={m.trainerThumb}
            workoutsNum={m.workouts}
          />
        ))}
      </div>
    </div>
  );
}

export default Cards;
