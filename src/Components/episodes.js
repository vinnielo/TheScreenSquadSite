import React from "react";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import Button from "react-bootstrap/Button";

function Episodes(props) {
  let epData = props.episodeData;
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>EPISODES:</h1>
      <CardDeck>
        {epData.episodes.map((item) => {
          return (
            <>
              <Card>
                <Card.Img variant="top" src={item.imgUrl} />
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>{item.description}</Card.Text>
          <a href={item.youtube} target="_blank" className="fab fa-youtube">{""}</a>
          <img src="/src/assets/yt_icon_rgb.png" href={item.youtube} target="_blank" />
                   
                  
                </Card.Body>
              </Card>
            </>
          );
        })}
      </CardDeck>
      <br />
      <Button>All Episodes</Button>
    </div>
  );
}

export default Episodes;
