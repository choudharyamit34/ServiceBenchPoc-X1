import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
 
class SBCarasoul extends Component {
    render() {
        return (
            <Carousel>
                <div>
                    <img src="../../images/servicebench1.jpg" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="../../images/servicebench2.jpg" />
                    <p className="legend">Legend 2</p>
                </div>
                {/* <div>
                    <img src="assets/3.jpeg" />
                    <p className="legend">Legend 3</p>
                </div> */}
            </Carousel>
        );
    }
}

export default SBCarasoul;
 