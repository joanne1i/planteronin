import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./Greetings.css";

function Greetings() {
  return (
    <div className="greetings-container">
      {/* <video src="/videos/video-1.mp4" autoPlay loop muted /> */}
      <div className="content">
        <div className="content__container">
          <p className="content__container__text">Room for more</p>

          <ul className="content__container__list">
            <li className="content__container__list__item">joy</li>
            <li className="content__container__list__item">light</li>
            <li className="content__container__list__item">growth</li>
            <li className="content__container__list__item">plants</li>
          </ul>
        </div>
      </div>
      {/* buttons are triggered in button.js */}
      {/* <div className="greetings-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          GET STARTED
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
          // onClick={console.log("hey")}
        >
          WATCH TRAILER <i className="far fa-play-circle" />
        </Button>
      </div> */}
    </div>
  );
}

export default Greetings;
