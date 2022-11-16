import React from "react";
import Card from 'react-bootstrap/Card';


class Weather extends React.Component {
  render (){
    return (
     <Card.Body>
      <ul>Weather Data
        <li>Date: {this.props.weatherData[0].date}</li>
        <li>Description: {this.props.weatherData[0].description}</li>
        <li>Date: {this.props.weatherData[1].date}</li>
        <li>Description: {this.props.weatherData[1].description}</li>
        <li>Date: {this.props.weatherData[2].date}</li>
        <li>Description: {this.props.weatherData[2].description}</li>
      </ul>
     </Card.Body>
    )
  }
}



export default Weather;
