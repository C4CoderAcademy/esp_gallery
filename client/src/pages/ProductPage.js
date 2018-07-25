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
                <Container>
                    <Row>
                        <Col xs="6"><img src="/images/LouSteer.jpg" /></Col>
                        <Col xs="6">.col-6</Col>
                    </Row>
                </Container>
                    
                   
                     {/* <div className="productimage"> */}
                    {/* <div className="productimage"><img src="/images/LouSteer.jpg" /></div> */}
                  
                
               
               
            </div>
        );
    }
};
 
export default ProductPage;