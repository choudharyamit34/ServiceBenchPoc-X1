import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

class SBCarasoul extends Component {
    render() {
        return (
            <Carousel showArrows={true} infiniteLoop useKeyboardArrows autoPlay className="presentation-mode"
                showThumbs={false}>
                <div>
                    <img src="../../../../public/assets/aboutUs/About_Us1.PNG" />
                </div>
                <div>
                    <img src="../../../../public/assets/aboutUs/About_Us2.PNG" />
                </div>
                <div>
                    <img src="../../../../public/assets/aboutUs/About_Us2_1.PNG" />
                </div>
                <div>
                    <img src="../../../../public/assets/aboutUs/About_Us3.PNG" />
                </div>
                <div>
                    <img src="../../../../public/assets/aboutUs/About_Us4.PNG" />
                </div>
                <div>
                    <img src="../../../../public/assets/aboutUs/About_Us5.PNG" />
                </div>
                <div>
                    <img src="../../../../public/assets/aboutUs/About_Us6.PNG" />
                </div>
            </Carousel>
        );
    }
}

export default SBCarasoul;
