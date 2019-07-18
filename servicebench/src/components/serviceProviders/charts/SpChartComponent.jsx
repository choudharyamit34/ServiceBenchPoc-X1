import React, { Component } from 'react';
import SjPieChart from '../../charts/sjChart';
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
    // console.log('props in Chart component',history);
     
    let { history } = this.props;
    // console.log('props in Chart component',history);
    let serviceProviderId = '';
    var propsArray=[];
    let fromPath='';

if (this.props.history.location.state != undefined && this.props.history.location.state != '') {
    serviceProviderId = this.props.history.location.state.serviceProviderId;
    fromPath= this.props.history.location.state.fromPath;   
  console.log('serviceProviderId in Sp Dashbaord :-', serviceProviderId);
  console.log('frompath in Sp dashbaord:-',fromPath);
  
}
    return (
      <div className="container-fluid container_position">
        {/* <!-- Marketing Icons Section --> */}
        <div className="row">
          <div className="col-lg-4 mb-4">
            <div className="card h-100">
              <h4 className="card-header">Service Jobs</h4>
              <CardColumns>
                <SjPieChart history={history} height={300}  width={350}/>
              </CardColumns>
              <div className="card-footer">
                <Link
                  to={{
                    pathname: "/serviceJobs",
                    state: {
                      fromPath: fromPath,
                      spId: serviceProviderId
                    }
                  }}
                  className="btn btn-primary"
                >
                  Show More
                </Link>
                {/* <Link to="/serviceJobs" className="btn btn-primary">Show More</Link> */}
              </div>
            </div>
          </div>
          <div className="col-lg-4 mb-4">
            <div className="card h-100">
              <h4 className="card-header">Claims</h4>
              <CardColumns>
                <ClaimPieChart history={history}  height={300}  width={350}/>
              </CardColumns>
              <div className="card-footer">
                <Link to="/claims" className="btn btn-primary">
                  Show More
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 mb-4">
            <div className="card h-100">
              <h4 className="card-header">Parts</h4>
              <CardColumns>
                <PartsPieChart history={history} height={300}  width={350}/>
              </CardColumns>
              <div className="card-footer">
                <Link to="/parts" className="btn btn-primary">
                  Show More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
}

export default SpChartComponent;