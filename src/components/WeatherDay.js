import React from "react";

class WeatherDay extends React.Component {
  render() {
    return (
      <>
        <li>Date: {this.props.day.time}</li>
        <li>{this.props.day.forecast}</li>
      </>
    )
  }
}


export default WeatherDay;
