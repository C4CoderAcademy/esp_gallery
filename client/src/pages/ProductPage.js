import React from 'react'
import '../index.css'; // Importing from index.css to apply the css styling
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';

import ArtCard  from './ArtCard';
import AboveFooter from './AboveFooter';
import Footer from './Footer';
import { Container, Row, Col } from 'reactstrap';




class ProductPage extends React.Component {
    render() {
        return (
            <div>
                <h2 className="PageHeader"></h2>
                
                <Container className="productcontainer">
                    <Row className="productcontainer">
                        <Col className="produnctImgCol" md="6"><img src="/images/LouSteer.jpg" id="productpageimage" /></Col>
                        <Col className="produnctTectCol" md="6"><h2>Saturn Reclining</h2>
                            <h5 className="artistName">Lou Steer</h5><br />
                            <h4 className="price">AUD $280</h4><br />
                            <h5 className="artistCatagory">Oil on Canvas</h5><br />
                            <h5>In Stock</h5>
                            <span className="GoToShopButton">   
                                <a href="/shop/"><Button color="secondary" size="lg">Buy Now</Button></a>
                            </span>
                        </Col>
                    </Row>
                </Container>

                 

                <Footer /> 
            </div>
        );
    }
};
         
export default ProductPage;