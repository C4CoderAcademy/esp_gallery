import React from 'react'
import '../index.css'; // Importing from index.css to apply the css styling
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';

import ArtCard  from './ArtCard';
import AboveFooter from './AboveFooter';
import Footer from './Footer';


export default () => (<div>
    <h2 className="PageHeader">Gallery Shop</h2>

    {/* Old bootstrap */}
    {/* <Container className="row1">
        <Row>
          <Col><Card className="artcard1">
        <CardImg top width="100%" src="/images/LouSteer.jpg" alt="image of reclineing nude" />
        <CardBody>
          <CardTitle className="artworktitle">Saturn Reclining</CardTitle>
          <CardSubtitle className="artistname">Lou Steer</CardSubtitle>
          <CardText className="price">$250</CardText>
          <CardText className="artsize">60cm x 50cm x 4cm</CardText>
          <CardText className="description"></CardText>
          <a href="/product/"><Button>Buy Now</Button></a>
        </CardBody>
      </Card></Col>
          <Col><Card className="artcard">
        <CardImg top width="100%" src="/images/BunyipSkull.jpg" alt="BunyipSkull" />
        <CardBody>
          <CardTitle className="artworktitle">Bunyip Skull</CardTitle>
          <CardSubtitle className="artistname">Casska</CardSubtitle>
          <CardText className="price">$250</CardText>
          <CardText className="artsize">60cm x 50cm x 4cm</CardText>
          <CardText className="description"></CardText>
          <a href="/product/"><Button>Buy Now</Button></a>
        </CardBody>
      </Card></Col>
          <Col><Card className="artcard">
        <CardImg top width="100%" src="/images/Chantal-Corey2.jpg" alt="illustration" />
        <CardBody>
          <CardTitle className="artworktitle">Line Woman</CardTitle>
          <CardSubtitle className="artistname">Chantal &amp; Corey</CardSubtitle>
          <CardText className="price">$250</CardText>
          <CardText className="artsize">60cm x 50cm x 4cm</CardText>
          <CardText className="description"></CardText>
          <a href="/product/"><Button>Buy Now</Button></a>
        </CardBody>
      </Card></Col>
          <Col><Card className="artcard">
        <CardImg top width="100%" src="/images/Chantal-Corey.jpg" alt="illustration" />
        <CardBody>
          <CardTitle className="artworktitle">Mist Faces</CardTitle>
          <CardSubtitle className="artistname">Chantal &amp; Corey</CardSubtitle>
          <CardText className="price">$250</CardText>
          <CardText className="artsize">60cm x 50cm x 4cm</CardText>
          <CardText className="description"></CardText>
          <a href="/product/"><Button>Buy Now</Button></a>
        </CardBody>
      </Card></Col>
        </Row>
        </Container> */}
        
    < ArtCard />
    <AboveFooter />
    <Footer /> 
  
    </div>

);