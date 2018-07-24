import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import Footer from './Footer';
import '../index.css'; // Importing from index.css to apply the css styling
import { Container, Row, Col } from 'reactstrap';



    
class AboveFooter extends React.Component {
    render() {
        return (
          
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
          
        );
    }
};
 
export default AboveFooter;