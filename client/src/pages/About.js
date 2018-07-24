import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import '../index.css'; 
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap'
import Footer from './Footer';
import AboveFooter from './AboveFooter';
import Img from 'react-image'


export default ({ match }) => (<div>
  
  <div className="aboutwrapper ">  
    
    <h2 className="PageHeader">About Us</h2><br />
      <p className="abouttext" >ESP Gallery opened in Illawarra Road,  Marrickville in September 2009.  Up to its physical closure in           2016,  ESP Gallery showed the work of over 300 local, national and international artists and held 75 exhibitions and events.<br /> <br /> 
      Highlights include Marrickville Contemporary Art Prize 2011 and 2012, Head On Festival 2010 and 2012, and Sydney Canvas Company Painting Prize 2013. Many ESP alumni have gone on to be finalists and winners of renowned public exhibitions including the Archibald, the Wynn and the Sulman.<br /><br />
      We are proud of what we have achieved with no government grants and our completely volunteer run organisation!<br /><br /> 
      ESP Gallery is now evolving into a virtual gallery. We now show quality artworks in a fresh way.</p>

      <div className="aboutimage">
        <img src="/images/HeadOnOpeninhNight.jpg" /><br />
        <small>Racheal Ireland,   Lou Steer,  Nicola Baily,  Marilke Loosjes</small>
      </div>
      
      
   
    <hr />
    <h2 className="PageHeader">Our History...</h2>
 
      <div className="historytextcolour"><hr /> 
        <p className="abouttext historytextcolour" > Hell of helvetica chia, swag sed humblebrag cray prism aesthetic meditation shabby chic pabst. Tattooed tousled craft beer banjo elit. Try-hard eu chillwave jean shorts bushwick kombucha coloring book ut. Artisan ennui 90's dolore cupidatat church-key butcher wayfarers culpa bushwick distillery lumbersexual fam unicorn. Narwhal fingerstache YOLO iceland migas bushwick nostrud pitchfork enamel pin la croix eu commodo neutra. Intelligentsia portland in woke lyft.<br /><br />
        Single-origin coffee flannel viral voluptate incididunt, wolf quinoa sed mlkshk 8-bit thundercats DIY freegan edison bulb tilde. Chia pop-up tempor occaecat normcore pork belly eiusmod brooklyn banh mi umami direct trade. Cornhole anim messenger bag aliqua echo park aute mlkshk synth irure scenester gastropub leggings enamel pin PBR&B snackwave. Pitchfork skateboard glossier lomo. Activated charcoal gluten-free literally irure coloring book enim chambray dreamcatcher health goth sed occupy..</p>
      
      <div className="espimage">
        <img src="/images/PhotoByOlgaKol.jpg" />
      </div>
      <hr />
    </div>
      

    

        
   

    <AboveFooter />
    {/* </div> */}
   

    <Footer /> 
  </div>
  </div>
 
);

  