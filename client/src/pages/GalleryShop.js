import React from 'react'
import '../index.css'; // Importing from index.css to apply the css styling
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';

import ArtCard  from './ArtCard';
import AboveFooter from './AboveFooter';
import Footer from './Footer';


export default () => (<div>
    <h2 className="PageHeader">Gallery Shop</h2>
    
    < ArtCard />
    <AboveFooter />
    <Footer /> 
  
    </div>

);