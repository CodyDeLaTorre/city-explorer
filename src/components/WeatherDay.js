import React from "react";

class WeatherDay extends React.Component {
  render() {
    return (
      <>
        <li>Date: {this.props.date}</li>
        <li>{this.props.description}</li>
      </>
    )
  }
}


export default WeatherDay;
