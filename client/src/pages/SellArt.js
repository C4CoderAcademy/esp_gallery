import React from 'react'
import AboveFooter from './AboveFooter';
import Footer from './Footer';
import { Container, Row, Col } from 'reactstrap';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';



export default () => (<div>
    <h2 className="PageHeader">Apply To Sell Art</h2>
      <div className="historytextcolour"><hr /> 
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