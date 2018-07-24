import React from 'react';
import ReactDOM from 'react-dom';
import { Carousel } from 'react-responsive-carousel';
import GalleryCarousel from './GalleryCarousel';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import Footer from './Footer';
import '../index.css'; // Importing from index.css to apply the css styling
import { Container, Row, Col } from 'reactstrap';
 
export default () => (<div>

            <div className="topofhomepage">    
                <h2 className="PageHeader virtualGallery">Virtual Gallery</h2>

                <h1 className="PageHeader exhibitionName">Retrospective 2018</h1>
                {/* <h3 className="PageHeader">{exhibitionName}</h3> Exhibition name is is called from froms/Uploadexhibiton.js */} 
            
                <p className="PageHeader">Mark Elliott Lou Steer Will Coles </p>
                {/* <p className="PageHeader">{artistName}</p> Artists name is is called from froms/Uploadexhibiton.js*/}
            </div>

       
    <GalleryCarousel /> {/* CALLING THE CAROSEL FROM GalleryCarosel.js AND RENDERING IT ON THIS PAGE */}

            <div className="bottomofhomepage">
                {/* GO TO SHOP BUTTON */}
                <span className="GoToShopButton">   
                    <a href="/shop/"><Button outline color="info" size="lg"> GO TO GALLERY SHOP</Button></a>
                </span> 
                
                <div className="areyouartistbox" >
                    <Container>
                        <Row className="artbox">
                            <Col className="artboxtext" md="6"><h1>Are you an Artist?</h1></Col>
                            <Col className="artboxbutton" md="6"><a href="/shop/"><Button  color="info" size="lg">APPLY TO SELL YOUR ART</Button></a></Col>
                        </Row>
                    </Container>
                    <div className="blockofWhite"></div>
                </div>
                        
                
                            
            </div>
        
    <Footer /> {/* CALLING FOOTER FROM pages/Footer.js AND RENDERING IT ON THIS PAGE */}

 </div>

);
 
