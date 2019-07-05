import React, { Component } from 'react';
import SjPieChart from './sjChart';
import ClaimPieChart from './claimChart';
import PartsPieChart from './partChart';
import {CardColumns} from 'reactstrap';
import {Link} from 'react-router-dom';

class ChartComponent extends Component {
    render() {
        const {history}=this.props;
        // console.log('props in Chart component',history);
        return (
            <div className="container">
                <h1 className="my-4">Welcome to Service Bench</h1>
                {/* <!-- Marketing Icons Section --> */}
                <div className="row">
                    <div className="col-lg-4 mb-4">
                        <div className="card h-100">
                            <h4 className="card-header">Service Jobs</h4>
                            <CardColumns>
                                <SjPieChart history={history}/>
                            </CardColumns>
                            <div className="card-footer">
                                <Link to="/serviceJobs" className="btn btn-primary">Show More</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 mb-4">
                        <div className="card h-100">
                            <h4 className="card-header">Claims</h4>
                            <CardColumns>
                                <ClaimPieChart history={history} />
                            </CardColumns>
                            <div className="card-footer">
                            <Link to="/claims" className="btn btn-primary">Show More</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 mb-4">
                        <div className="card h-100">
                            <h4 className="card-header">Parts</h4>
                            <CardColumns>
                                <PartsPieChart  history={history}/>
                            </CardColumns>
                            <div className="card-footer">
                            <Link to="/parts" className="btn btn-primary">Show More</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 mb-4">
                        <div className="card h-100">
                            <h4 className="card-header">Service Jobs</h4>
                            <CardColumns>
                                <SjPieChart history={history}/>
                            </CardColumns>
                            <div className="card-footer">
                                <Link to="/serviceJobs" className="btn btn-primary">Show More</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 mb-4">
                        <div className="card h-100">
                            <h4 className="card-header">Claims</h4>
                            <CardColumns>
                                <ClaimPieChart history={history} />
                            </CardColumns>
                            <div className="card-footer">
                            <Link to="/claims" className="btn btn-primary">Show More</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 mb-4">
                        <div className="card h-100">
                            <h4 className="card-header">Parts</h4>
                            <CardColumns>
                                <PartsPieChart  history={history}/>
                            </CardColumns>
                            <div className="card-footer">
                            <Link to="/parts" className="btn btn-primary">Show More</Link>
                            </div>
                        </div>
                    </div>
                </div>
            
            </div>
        );
    }
}

export default ChartComponent;