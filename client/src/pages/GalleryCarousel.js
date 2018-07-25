import React from 'react';
import ReactDOM from 'react-dom';
import { Carousel } from 'react-responsive-carousel';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

// export default () => (<div>

 {/* CALLING ARTWORK / ARTCARD */}
    {/* <list>
        <Artwork title={} image={} ... />
    </list> */}
    {/* END CALLING THE CARD */}
    
class GalleryCarousel extends React.Component {
    render() {
        return (
            <Carousel>
                <div>
                    <img src="/images/LouSteer.jpg" />
                    <p className="legend"><a href="/product/"target="_blank">Reclining Saturn</a></p>
                </div>
                <div>
                    <img src="/images/BunyipSkull.jpg" />
                    <p className="legend"><a href="/product/"target="_blank">Bunyip Skull</a></p>
                </div>
               
                <div>
                    <img src="/images/MarkElliott-whiteIbis.jpg" />
                    <p className="legend"><a href="/product/"target="_blank">White Ibis</a></p>
                </div>
                <div>
                    <img src="/images/MarkElliot.jpg" />
                    <p className="legend"><a href="/product/"target="_blank">Little Sparrows</a></p>
                </div>
                <div>
                    <img src="/images/Rachael-Hallinan.jpg" />
                    <p className="legend"><a href="/product/"target="_blank">Mist Memories</a></p>
                </div>
                <div>
                    <img src="/images/Chantal-Corey.jpg" />
                    <p className="legend"><a href="/product/"target="_blank">Faces</a></p>
                </div>
                <div>
                    <img src="/images/Chantal-Corey2.jpg" />
                    <p className="legend"><a href="/product/"target="_blank">Face Illustration</a></p>
                </div>
            </Carousel>
        );
    }
};
 
export default GalleryCarousel;

// ReactDOM.render(<GalleryCarousel />, document.querySelector('.gallery-carousel'));


