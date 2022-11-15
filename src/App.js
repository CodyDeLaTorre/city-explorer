import Button from 'react-bootstrap/Button';
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
      isError: false
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
      });
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
            <Button type="submit">Explore!</Button>
          </Form>
          {
            this.state.isError? 
            <Alert variant="warning">
            <Alert.Heading>{this.state.errorMessage}</Alert.Heading></Alert> 
            : 
             <div>
             <Card style={{ width: '33rem' }}>
               <Card.Img src={locImage}></Card.Img>
               <Card.Title>{displayName}</Card.Title>
               <Card.Text>Latitude: {lat} & Longitude: {lon}</Card.Text>
             </Card>
           </div> 
          }
        </main>
    </>
        );
  }
}

        export default App;
