import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

const ArtCard = (props) => {
  return (
    <div>
      <Card className="artcard">
        <CardImg top width="100%" src="/images/LouSteer.jpg" alt="image of reclineing nude" />
        <CardBody>
          <CardTitle>Saturn Reclining</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default ArtCard ;