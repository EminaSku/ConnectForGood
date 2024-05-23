import React from "react";
import "./GetStarted.css";
const GetStarted = () => {
  return (
    <div id="get-started" className="g-wrapper">
      <div className="paddings innerWidth g-container">
        <div className="flexColCenter inner-container">
          <span className="primaryText">Make a Difference Today, Join Us!</span>
          <span className="secondaryText">
            Subscribe and find out about latest volunteering events from us.
            <br />
          </span>
          <button className="button" href>
            <a href="mailto:eminaskula002@gmail.com">Contact Us</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
