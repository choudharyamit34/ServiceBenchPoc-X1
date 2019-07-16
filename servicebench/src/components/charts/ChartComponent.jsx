import React, { Component } from 'react';
import SjPieChart from './sjChart';
import ClaimPieChart from './claimChart';
import PartsPieChart from './partChart';
import { CardColumns } from 'reactstrap';
import { Link } from 'react-router-dom';
import '../../Stylesheets/container.css';
import SBCarasoul from "../carousel/SBCarasoul";
import CarouselComponent from "../carousel/CarouselComponent";
class ChartComponent extends Component {
    render() {
        const { history } = this.props;
        // console.log('props in Chart component',history);
        return (
            <div className="container-fluid container_position padding_top_15_px width_125_per" >
                {/* <!-- Marketing Icons Section --> */}
                <div className="row">
                    <div className="col-lg-8 mb-8 margin_left_minus_7_per margin_top_3_per">
                        <div className="card h-100 border_0">
                            <CarouselComponent />
                        </div>
                    </div>
                    <div className="col-lg-4 mb-4 margin_top_2_per ">
                        <div className="card h-100 width_65_per">
                            <h4 className="card-header ">Service Jobs</h4>
                            <CardColumns>
                                <SjPieChart history={history} />
                            </CardColumns>

                            <h4 className="card-header ">Parts</h4>
                            <CardColumns>
                                <PartsPieChart history={history} />
                            </CardColumns>
                        </div>
                    </div>

                </div>

            </div>
        );
    }
}

export default ChartComponent;