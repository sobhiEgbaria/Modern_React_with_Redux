import React, { Component } from "react";
import "./SeasonsDisplay.css";

//getSeason 2-8 in the north is summer in the south is winter
// lat > 0 == north lat<0 == south
const getSeason = (lat, month) => {
  if (month > 2 && month < 8) {
    return lat > 0 ? "summer" : "winter";
  }
  return lat > 0 ? "winter" : "summer";
};

const seasonConfig = {
  summer: {
    text: "let's go to the beach",
    icon: "sun",
  },
  winter: { text: "burrr it's so cold", icon: "snowflake" },
};

const SeasonsDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getUTCMonth()); // git summer OR winter from getSeasons

  const { icon, text } = seasonConfig[season]; // 1) go to seasonConfig 2) bring obj by [season] 3) destructuring obj values in {text, icon}

  return (
    <div className={`Seasons-Display ${season}`}>
      <i className={`icon-left massive ${icon} icon`} />
      <h1>{text} </h1>
      <i className={`icon-right massive ${icon} icon`} />
    </div>
  );
};

export default SeasonsDisplay;
