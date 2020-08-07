import React from "react";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import Button from "react-bootstrap/Button";

function Episodes(props) {
  let epData = props.episodeData;
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>EPISODES:</h1>
      <CardDeck style={{marginLeft: "10px"}}>
        {epData.episodes.map((item) => {
          return (
            <>
              <Card>
                <Card.Img variant="top" src={item.imgUrl} style={{height: "200px"}}/>
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>{item.description}</Card.Text>
          <a href={item.youtube} target="_blank" >
          <img src="https://github.com/vinnielo/TheScreenSquadSite/blob/master/src/assets/yt_icon_rgb.png?raw=true" target="_blank" style={{width: 50}}/></a>
                   
                  
                </Card.Body>
              </Card>
            </>
          );
        })}
      </CardDeck>
      <br />
      <Button href="https://podcasts.apple.com/us/podcast/the-screen-squad/id1395723796" target="_blank" style={{marginLeft: "45%"}}>All Episodes</Button>
      <br />
      <br />
    </div>
  );
}

export default Episodes;
