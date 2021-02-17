import React, { useState } from "react";
import PlayList from "../icons/PlayList";
import TrackIcon from "../icons/Track";
import TimerIcon from "../icons/Timer";
import "./Card.css";

function Card({
  title = "Lake Inniscarra, Ireland—Pyramid",
  time,
  distance,
  workoutsNum,
  thumbPic,
  userPic,
}) {
  const [selected, setSelected] = useState(false);
  const onSetSelected = () => {
    setSelected(!selected);
  };
  return (
    <div
      className={selected ? "card-container_" : "card-container"}
      onClick={() => onSetSelected()}
    >
      <div className="card-thumb">
        <img className="thumbPic" src={`/images/${thumbPic}`} alt="Thumb" />
        {workoutsNum > 1 ? (
          <div className="Overlayer">
            <div>
              <span>{workoutsNum}</span>
              Workouts
              <PlayList className="playlistIcon" fill="currentColor" />
            </div>
          </div>
        ) : null}
      </div>
      <div className="card-body">
        <div className="card-body-container">
          <div className="card-body-content">
            <h2 className="title">{title}</h2>
            {time && distance ? (
              <div className="status">
                <span>
                  <TimerIcon />
                  <p>{time}</p>
                </span>
                <span>
                  <TrackIcon />
                  <p>{distance}</p>
                </span>
              </div>
            ) : (
              <div className="status_">
                <span>
                  <TimerIcon />
                  <p>{0}</p>
                </span>
                <span>
                  <TrackIcon />
                  <p>{0}</p>
                </span>
              </div>
            )}
          </div>
          <div className="card-body-userPic">
            <img className="userPic" src={`/images/${userPic}`} alt="" />
          </div>
        </div>
        <div className={selected ? "button" : "button_"}>
          <p>View Details</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
