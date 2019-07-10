import React, { Component } from 'react'
import SpChartComponent from '../charts/SpChartComponent';
import ChartComponent from '../../charts/ChartComponent';
import '../../../Stylesheets/container.css';


 class SpDashBoard extends Component {
     
  render() {
    console.log('props in did mount in sp dashboard  component', this.props);
    const history = this.props.history;
    // console.log('History in  sj list component',history);
    let serviceProviderId = '';
    var propsArray=[];

    if (this.props.history.location.state != undefined && this.props.history.location.state != '') {
        serviceProviderId = this.props.history.location.state.serviceProviderId;
        propsArray.push({"serviceProviderId":serviceProviderId});
        propsArray.push({"history":history});
      console.log('serviceProviderId in sp dashboard component :-', serviceProviderId);
    }
    console.log('props array ',propsArray);
    return (
      <React.Fragment className="container-fluid container_position">
        {/* <SpChartComponent   history={history} /> */}
        <ChartComponent  history={history} />
      </React.Fragment>
    );
  }
}
export default  SpDashBoard;

