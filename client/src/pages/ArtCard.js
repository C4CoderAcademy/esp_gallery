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
          <CardText className="artsize">60cm x 50cm x 4cm</CardText>
          <CardText className="description"></CardText>
          <a href="/product/"><Button>Buy Now</Button></a>
        </CardBody>
      </Card>
      <Card className="artcard">
        <CardImg top width="100%" src="/images/BunyipSkull.jpg" alt="BunyipSkull" />
        <CardBody>
          <CardTitle className="artworktitle">Bunyip Skull</CardTitle>
          <CardSubtitle className="artistname">Casska</CardSubtitle>
          <CardText className="price">$250</CardText>
          <CardText className="artsize">60cm x 50cm x 4cm</CardText>
          <CardText className="description"></CardText>
          <a href="/product/"><Button>Buy Now</Button></a>
        </CardBody>
      </Card>
      <Card className="artcard">
        <CardImg top width="100%" src="/images/Chantal-Corey2.jpg" alt="illustration" />
        <CardBody>
          <CardTitle className="artworktitle">Line Woman</CardTitle>
          <CardSubtitle className="artistname">Chantal &amp; Corey</CardSubtitle>
          <CardText className="price">$250</CardText>
          <CardText className="artsize">60cm x 50cm x 4cm</CardText>
          <CardText className="description"></CardText>
          <a href="/product/"><Button>Buy Now</Button></a>
        </CardBody>
      </Card>
      <Card className="artcard">
        <CardImg top width="100%" src="/images/Chantal-Corey.jpg" alt="illustration" />
        <CardBody>
          <CardTitle className="artworktitle">Mist Faces</CardTitle>
          <CardSubtitle className="artistname">Chantal &amp; Corey</CardSubtitle>
          <CardText className="price">$250</CardText>
          <CardText className="artsize">60cm x 50cm x 4cm</CardText>
          <CardText className="description"></CardText>
          <a href="/product/"><Button>Buy Now</Button></a>
        </CardBody>
      </Card>
      <Card className="artcard">
        <CardImg top width="100%" src="/images/MarkElliot.jpg" alt="illustration" />
        <CardBody>
          <CardTitle className="artworktitle">Sparrows</CardTitle>
          <CardSubtitle className="artistname">Mark Elliott</CardSubtitle>
          <CardText className="price">$250</CardText>
          <CardText className="artsize">60cm x 50cm x 4cm</CardText>
          <CardText className="description"></CardText>
          <a href="/product/"><Button>Buy Now</Button></a>
        </CardBody>
      </Card>
      <Card className="artcard">
        <CardImg top width="100%" src="/images/MarkElliott-whiteIbis.jpg" alt="illustration" />
        <CardBody>
          <CardTitle className="artworktitle">Whiite ibis</CardTitle>
          <CardSubtitle className="artistname">Mark Elliott</CardSubtitle>
          <CardText className="price">$250</CardText>
          <CardText className="artsize">60cm x 50cm x 4cm</CardText>
          <CardText className="description"></CardText>
          <a href="/product/"><Button>Buy Now</Button></a>
        </CardBody>
      </Card>
      <Card className="artcard">
        <CardImg top width="100%" src="/images/GefforyGoodes.jpg" alt="illustration" />
        <CardBody>
          <CardTitle className="artworktitle">Whiite ibis</CardTitle>
          <CardSubtitle className="artistname">Geffory Goodes</CardSubtitle>
          <CardText className="price">$250</CardText>
          <CardText className="artsize">60cm x 50cm x 4cm</CardText>
          <CardText className="description"></CardText>
          <a href="/product/"><Button>Buy Now</Button></a>
        </CardBody>
      </Card>
      <Card className="artcard">
        <CardImg top width="100%" src="/images/Rachael-Hallinan.jpg" alt="illustration" />
        <CardBody>
          <CardTitle className="artworktitle">Whiite ibis</CardTitle>
          <CardSubtitle className="artistname">Rachael Hallinan</CardSubtitle>
          <CardText className="price">$250</CardText>
          <CardText className="artsize">60cm x 50cm x 4cm</CardText>
          <CardText className="description"></CardText>
          <a href="/product/"><Button>Buy Now</Button></a>
        </CardBody>
      </Card>
     
     
     
     
    </div>
  );
};

export default ArtCard ;