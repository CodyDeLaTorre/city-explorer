import React from 'react';
import Card from 'react-bootstrap/Card';





class Movies extends React.Component {
  render(){
    console.log('oy!!!!' , this.props.movieData);
    return(
      this.props.movieData.map(element => {
        return(
          <Card className = "movies" style={{ width: '20rem' }}>
            <Card.Img src={element.poster}></Card.Img>
            <Card.Title>{element.title}</Card.Title>
            <Card.Text>{element.release}</Card.Text>
          </Card>)
      })
    )
  }

}




export default Movies;
