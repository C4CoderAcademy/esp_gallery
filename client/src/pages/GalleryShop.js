import React from 'react'
import '../index.css'; // Importing from index.css to apply the css styling
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';

import ArtCard  from './ArtCard';
import AboveFooter from './AboveFooter';
import Footer from './Footer';


export default () => (<div>
    <h2 className="PageHeader">Gallery Shop stuff</h2>
    

 {/* <div>
      <Card className="artcard">
        <CardImg top width="100%" src="/images/LouSteer.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </div> */}

    < ArtCard />
    <AboveFooter />
    <Footer /> 
  
    </div>

);