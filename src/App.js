import Button from 'react-bootstrap/Button';
import Weather from './components/Weather'
import Movies from './components/Movies'
import Alert from 'react-bootstrap/Alert';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      city: '',
      cityData: {},
      errorMessage: '',
      isError: false,
      weatherData: [],
      isWeather: false,
      movieData: [],
      isMovie: false
    }
  }

  handleWeather = async () => {
    try {
      let url = `${process.env.REACT_APP_SERVER}/weather?place=${this.state.city}&lat=${this.state.cityData.lat}&lon=${this.state.cityData.lon}`
      let weatherData = await axios.get(url);
      this.setState({
        weatherData: weatherData.data,
        isWeather: true
      })
    } catch (error) {
      this.setState({
        errorMessage: error.message,
        isError: true,
        isWeather: false
      })
    }
  }

  handleMovies = async () => {
    try {
      let url = `${process.env.REACT_APP_SERVER}/movies?place=${this.state.city}`
      let movieData = await axios.get(url);
      this.setState({
        movieData: movieData.data,
        isMovie: true
      })
    } catch (error) {
      this.setState({
        errorMessage: error.message,
        isError: true,
        isMovie: false
      })
    }
  }

  handleInput = (event) => {
    this.setState({
      city: event.target.value,
      isError: false
    })
  }

  handleSubmit = async (event) => {
    try {
      event.preventDefault();
      let location = await axios.get(`https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.state.city}&format=json`);
      this.setState({
        cityData: location.data[0],
      }, this.handleWeather);
    } catch (error) {
      this.setState({
        errorMessage: error.message,
        isError: true
      })
    }
  }

  render() {
    let displayName = this.state.cityData.display_name
    let lat = this.state.cityData.lat;
    let lon = this.state.cityData.lon;
    let locImage = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&center=${lat},${lon}&zoom=10`;
    return (
      <>
        <header><h1>City Locator</h1></header>
        <main>
          <Form onSubmit={this.handleSubmit}>
            <Form.Label>Find a location!
              <Form.Control name="city" type="text" placeholder="'Seattle', 'Los Angeles'" onChange={this.handleInput}>
              </Form.Control>
            </Form.Label>
            <Button variant ="secondary" type="submit">Explore!</Button>
          </Form>
          {
            this.state.isError ?
              <Alert variant="warning">
                <Alert.Heading>{this.state.errorMessage}</Alert.Heading></Alert>
              :
              <div>
                <section id='map'>
                  {this.state.cityData.display_name && <Card style={{ width: '33rem' }}>
                    {this.state.cityData.display_name && <Card.Img src={locImage}></Card.Img>}
                    <Card.Title>{displayName}</Card.Title>
                    {this.state.weatherData.length > 0 && <Weather weatherData={this.state.weatherData} />}
                    {this.state.weatherData.length > 0 && <Button variant ="secondary" onClick={this.handleMovies}>Movies set in this location</Button>}
                  </Card>}
                </section>
                <section id='movie'>
                {this.state.movieData.length > 0 && <Movies movieData={this.state.movieData} />}
                </section>
              </div>
          }
        </main>
      </>
    );
  }
}

export default App;
