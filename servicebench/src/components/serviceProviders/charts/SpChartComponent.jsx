import React, { Component } from 'react';
import SjPieChart from '../../charts/sjChart';
import MainChart from './sjBarChart2';
import ClaimPieChart from '../../charts/claimChart';
import PartsPieChart from '../../charts/partChart';
import {CardColumns} from 'reactstrap';
import {Link} from 'react-router-dom';
import '../../../Stylesheets/container.css';

class SpChartComponent extends Component {
    constructor(props) {
        super(props);
      }
    
    render()  {
    const { history } = this.props;
    // console.log('props in Chart component',history);
    return (
        <div className="container-fluid container_position" >
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
                </div>
    );
}
}

export default SpChartComponent;