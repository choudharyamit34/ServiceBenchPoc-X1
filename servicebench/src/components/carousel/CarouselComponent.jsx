import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

class CarouselComponent extends Component {
    render() {
        return (
            <Carousel showArrows={true} infiniteLoop useKeyboardArrows autoPlay className="presentation-mode"
            showThumbs={false}>
                <div>
                    <img src="../../../../public/assets/crsol-1.png" />                    
                </div>
                <div>
                    <img src="../../../../public/assets/crsol-2.png" />                    
                </div>
                <div>
                    <img src="../../../../public/assets/crsol-3.png" />                    
                </div>
                <div>
                    <img src="../../../../public/assets/crsol-4.png" />                    
                </div>
                <div>
                    <img src="../../../../public/assets/crsol-5.png" />                    
                </div>
                
            </Carousel>
        );
    }
}

export default CarouselComponent;