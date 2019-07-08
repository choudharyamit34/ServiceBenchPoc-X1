import React, { Component } from 'react';
import SjBarChart from './sjBarChart';
import MainChart from './sjBarChart2';
import ClaimPieChart from './claimChart';
import PartsPieChart from './partChart';
import {CardColumns} from 'reactstrap';
import {Link} from 'react-router-dom';

class SpChartComponent extends Component {
    constructor(props) {
        super(props);
      }
    
    render() {
        console.log('props in SPChart-Comp',this.props);
        const {history}=this.props;
        // console.log('props in Chart component',history);
        return (
            
                <div className="row">                    
                        <h4 className="card-header">Service Jobs</h4>
                        <CardColumns>
                            {/* <MainChart history={history}/> */}
                        </CardColumns>
                        <div className="card-footer">
                            <Link to="/serviceJobs" className="btn btn-primary">
                            Show More</Link>
                        </div>
             </div>             
          
        );
    }
}

export default SpChartComponent;