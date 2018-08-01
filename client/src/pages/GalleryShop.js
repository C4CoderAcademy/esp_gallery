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

    < ArtCard /><hr />

    <div className="bottomofhomepage bottomshoppage"> 
        <div className="areyouartistbox" >
            <Container>
                <Row className="artbox">
                    <Col className="artboxtext" md="6"><h1>Are you an Artist?</h1></Col>
                    <Col className="artboxbutton" md="6"><a href="/shop/"><Button  color="info" size="lg">APPLY TO SELL YOUR ART</Button></a></Col>
                </Row>
            </Container>
            {/* <div className="blockofWhite"><p></p></div> */}
        </div>                    
    </div>
  
    <Footer /> 
  
    </div>

);