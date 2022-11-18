import React from 'react';
import Card from 'react-bootstrap/Card';

class Movie extends React.Component {

  render() {
    return (
      <Card className="movies" style={{ width: '20rem' }}>
        <Card.Img src={this.props.poster}></Card.Img>
        <Card.Title>{this.props.title}</Card.Title>
        <Card.Text>{this.props.release}</Card.Text>
      </Card>
    )
  }

}

export default Movie;
