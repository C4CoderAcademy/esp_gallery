import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Footer from './Footer';

export default ({ match }) => (<div>


  <div className="container">      
    <h2 className="PageHeader">About Us</h2><br />
      <div className="aboutwrapper">

    
      
      <h3>Our story</h3>
      <p>ESP Gallery opened in Illawarra Road,  Marrickville in September 2009.  Up to its physical closure in 2016,  ESP Gallery showed the work of over 300 local, national and international artists and held 75 exhibitions and events. 

Highlights include Marrickville Contemporary Art Prize 2011 and 2012, Head On Festival 2010 and 2012, and Sydney Canvas Company Painting Prize 2013. Many ESP alumni have gone on to be finalists and winners of renowned public exhibitions including the Archibald, the Wynn and the Sulman.

We are proud of what we have achieved with no government grants and our completely volunteer run organisation! 

ESP Gallery is now evolving into a virtual gallery. We now show quality artworks in a fresh way.</p>

    {/* </div> */}
    </div>

   <Footer /> 
  </div>
  </div>
);

  