import React from 'react'
import AboveFooter from './AboveFooter';
import Footer from './Footer';
import { Container, Row, Col } from 'reactstrap';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';



export default () => (<div>
    <h2 className="PageHeader">Apply To Sell Art</h2>
        <div className="historytextcolour"><hr /> 
        <h3 className="PageHeader">A website for Artists to bring their work to you</h3>  

            <span className="GoToShopButton">   
                <a href="/sellart"><Button outline color="info" size="lg">Apply Now</Button></a>
            </span>
            
            <div className="producttext">
            <p className="PageHeader">ESP Gallery is here to help show your work to the world.<br /><br /> We have years of experiance and are dedicated to showcaseing artist’s work.<br /><br /> Your art should be easily accessable by everyone.</p>
            <h4 className="PageHeader">We are here to bring your art to the world</h4>
            </div><br />
        
                
      
            <p className="abouttext historytextcolour" > Hell of helvetica chia, swag sed humblebrag cray prism aesthetic meditation shabby chic pabst. Tattooed tousled craft beer banjo elit. Try-hard eu chillwave jean shorts bushwick kombucha coloring book ut. Artisan ennui 90's dolore cupidatat church-key butcher wayfarers culpa bushwick distillery lumbersexual fam unicorn. Narwhal fingerstache YOLO iceland migas bushwick nostrud pitchfork enamel pin la croix eu commodo neutra. Intelligentsia portland in woke lyft.<br /><br />
            Single-origin coffee flannel viral voluptate incididunt, wolf quinoa sed mlkshk 8-bit thundercats DIY freegan edison bulb tilde. Chia pop-up tempor occaecat normcore pork belly eiusmod brooklyn banh mi umami direct trade. Cornhole anim messenger bag aliqua echo park aute mlkshk synth irure scenester gastropub leggings enamel pin PBR&B snackwave. Pitchfork skateboard glossier lomo. Activated charcoal gluten-free literally irure coloring book enim chambray dreamcatcher health goth sed occupy.</p><hr />
     </div>
     
     <div className="areyouartistbox" >
        <Container>
            <Row className="artbox">
                <Col className="artboxtext" md="6"><h1>Are you an Artist?</h1></Col>
                <Col className="artboxbutton" md="6"><a href="/shop/"><Button  color="info" size="lg">APPLY NOW</Button></a></Col>
            </Row>
        </Container>
        <div className="blockofWhite"></div>
     </div>                    

    <Footer /> 
</div>

);