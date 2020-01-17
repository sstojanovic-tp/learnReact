import React from "react";
import Style from './SeasonDisplay.scss';

const seasonConfig = {
    summer: {
      text: "Let's hit the beach!",
      iconName: 'sun'
    },
    winter: {
      text: 'Buhhrrr it is cold',
      iconName: 'snowflake'
    }
};

const getSeason = (lat, month) => {
  if(month > 2 && month < 9) {
    // eslint-disable-next-line no-unused-expressions
    return lat > 0 ? 'summer': 'winter';
  } else {
    return lat > 0 ? 'winter': 'summer';
  }
};

const SeasonDisplay = props => {
  const month = new Date().getMonth();
  const season = getSeason(props.lat, month);
  const {text, iconName} = seasonConfig[season];
  return(
    <div className={`${season} season-wrap`} style={Style.seasonWarp}>
      <i className={`icon-left massive icon ${iconName} ${season}`} style={Style.iconLeft}/>
      <h1>{text}</h1>
      <i className={`icon-right massive icon ${iconName} ${season}`} style={Style.iconRight}/>
    </div>
  );
};

export default SeasonDisplay;