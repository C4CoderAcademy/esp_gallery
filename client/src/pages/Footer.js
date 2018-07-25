import React from 'react'
import '../index.css'; // Importing from index.css to apply the css styling
// import TermsOfService from "./pages/TermsOfService"; DOESNT WORK - FIX IT

export default () => (<div className="footerwrapper">
        <div className="textinfooter">
            <h2 className="PageHeader"></h2>
            <a href="https://www.facebook.com/groups/espgallery/" target="_blank" ><img src="/images/Facebook.png" className="fbicon" /></a>
            <a href="https://www.instagram.com/explore/locations/1029284622/esp-gallery-nyc/" target="_blank" ><img src="/images/Instagram.png" className="instaicon" /></a><br />
            <small className="footertextlink"><a href="termsofservice">Terms of service</a></small>   <small className="footertextlink"><a href="privacypolicy">Privacy policy</a></small><br />
            <small>&copy; ESP Gallery</small><br />
            <small>Web Design by &#40;C4&#41;</small>
        </div>          
    </div>
);