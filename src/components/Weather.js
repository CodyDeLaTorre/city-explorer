import React from "react";
import WeatherDay from "./WeatherDay";
import Card from 'react-bootstrap/Card';


class Weather extends React.Component {
  render() {
    let weatherArr = this.props.weatherData.map((day, idx) => {
      return (
        <WeatherDay
          date={day.date}
          description={day.description}
          key={idx}
        />
      )
    })
    return (
      <Card.Body>
        <h2>Weather Forecast</h2>
        <ul>
          {weatherArr}
        </ul>
      </Card.Body>
    )
  }
}



export default Weather;
