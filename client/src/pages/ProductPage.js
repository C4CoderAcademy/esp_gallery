import React from 'react'
import '../index.css'; // Importing from index.css to apply the css styling
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';

import ArtCard  from './ArtCard';
import AboveFooter from './AboveFooter';
import Footer from './Footer';



class ProductPage extends React.Component {
    render() {
        return (
            <div>
                <h2 className="PageHeader">Gallery Shop</h2>
                    <h3 className="PageHeader">A website for Artists to bring there work to you</h3>
                    
                    <span className="GoToShopButton">   
                        <a href="/sellart"><Button outline color="info" size="lg">Apply Now</Button></a>
                    </span>  

                <p>ESP Gallery is here to help show your work to the world. We have years of experiance and are dedicated to showcaseing artist’s work. Your art should be easily accessable by everyone.</p>
               
            </div>
        );
    }
};
 
export default ProductPage;