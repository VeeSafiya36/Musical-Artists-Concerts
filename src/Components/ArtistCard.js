import React from 'react'
import Card from 'react-bootstrap/Card';

function ArtistCard({artist}) {
  return (

<div className="ArtistCard">
<Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src= {artist.picture}/>
      <Card.Body className="fontColor">
        <Card.Title>{artist.name}</Card.Title>
        <Card.Text>
        {artist.city} 
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
  );
}





export default ArtistCard