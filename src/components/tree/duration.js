import React from 'react';
import './duration.css'; // Import CSS file for styling

const Duration = ({ timelimit }) => {

  const durations = getDuration(timelimit)

  return (
    <div className="task-duration-container">
      {durations
        .reduce((result, duration, i) => result.concat(...Array(duration).fill(i)), [])
        .reverse()
        .map((item, index) => (
          <div
            key={index}
            className={`duration`}
            style={{
              backgroundColor: [
                "#4E1496",
                "#741496",
                "#AE1772",
                "#EF1B68"
              ][item]
            }}
          >
            <div className="duration-overlay" />
            <span className={"duration-text"}>{['D', 'W', 'M', 'Y'][item]}</span>
          </div>
        ))}
      <span className="task-duration-text" style={{color: "#73FF79"}}>{`(${formatDuration(durations)})`}</span>
    </div>
  );
};


export function getDuration(timelimit){
  let years = 0
  let months = 0
  let weeks = 0

  let remainder = timelimit
  if (remainder >= 365) {
    years = Math.floor(remainder / 365)
    remainder -= years * 365
  }
  if (remainder >= 30) {
    months = Math.floor(remainder / 30)
    remainder -= months * 30
  }
  if (remainder >= 7) {
    weeks = Math.floor(remainder / 7)
    remainder -= weeks * 7
  }
  const days = remainder
  return [days, weeks, months, years]
}


/**
 * Convert the skill time limit to a string with units of days/months/weeks/years
 * @param intervalDurations [days, weeks, months, years]
 */
function formatDuration(intervalDurations) {
  const [days, weeks, months, years] = intervalDurations

  let string = ""
  if (years !== 0) {
    string += years + " YEAR"
    if (years > 1) string += "S"
    string += " "
  }
  if (months !== 0) {
    string += months + " MONTH"
    if (months > 1) string += "S"
    string += " "
  }
  if (weeks !== 0) {
    string += weeks + " WEEK"
    if (weeks > 1) string += "S"
    string += " "
  }
  if (days !== 0) {
    string += days + " DAY"
    if (days > 1) string += "S"
    string += " "
  }
  return string.trim()
}


export default Duration;