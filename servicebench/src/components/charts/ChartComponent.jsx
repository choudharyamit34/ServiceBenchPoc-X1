import React, { Component } from 'react';
import SjPieChart from './sjChart';
import ClaimPieChart from './claimChart';
import PartsPieChart from './partChart';
import {CardColumns} from 'reactstrap';
class ChartComponent extends Component {
    render() {
        return (
            <div className="container">
                <h1 className="my-4">Welcome to Service Bench</h1>
                {/* <!-- Marketing Icons Section --> */}
                <div className="row">
                    <div className="col-lg-4 mb-4">
                        <div className="card h-100">
                            <h4 className="card-header">Service Jobs</h4>
                            <CardColumns>
                                <SjPieChart />
                            </CardColumns>
                            <div className="card-footer">
                                <a href="/serviceJobs" className="btn btn-primary">Show More</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 mb-4">
                        <div className="card h-100">
                            <h4 className="card-header">Claims</h4>
                            <CardColumns>
                                <ClaimPieChart />
                            </CardColumns>
                            <div className="card-footer">
                                <a href="/claims" className="btn btn-primary">Show More</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 mb-4">
                        <div className="card h-100">
                            <h4 className="card-header">Parts</h4>
                            <CardColumns>
                                <PartsPieChart />
                            </CardColumns>
                            <div className="card-footer">
                                <a href="/serviceJobs" className="btn btn-primary">Learn More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ChartComponent;