import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

const ArtCard = (props) => {
  return (
    <div>
      <Card className="artcard">
        <CardImg top width="100%" src="/images/LouSteer.jpg" alt="image of reclineing nude" />
        <CardBody>
          <CardTitle className="artworktitle">Saturn Reclining</CardTitle>
          <CardSubtitle className="artistname">Lou Steer</CardSubtitle>
          <CardText className="price">$250</CardText>
          <a href="/product/"><Button>Buy Now</Button></a>
        </CardBody>
      </Card>
    </div>
  );
};

export default ArtCard ;