import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

class CarouselComponent extends Component {
    render() {
        return (
            <Carousel showArrows={true} infiniteLoop useKeyboardArrows autoPlay className="presentation-mode"
            showThumbs={false}>
                <div>
                    <img src="../../../../public/assets/servicebench1.jpg" />
                    <p className="legend"></p>
                </div>
                <div>
                    <img src="../../../../public/assets/servicebench2.jpg" />
                    <p className="legend"></p>
                </div>
            </Carousel>
        );
    }
}

export default CarouselComponent;