import React from "react";
import BarChart from 'react-bar-chart';
import { MDBContainer } from "mdbreact";
import { Doughnut } from 'react-chartjs-2';

class SjBarChart extends React.Component {
  constructor()
  {
    super();
    this.history={};
    this.handleElementClick=this.handleElementClick.bind(this);
    this.state={
    dataPie:[
      {text: 'Closed', value: 500}, 
      {text: 'Accepted', value: 200} ,
      {text: 'New', value: 400}, 
      {text: 'Rejected', value: 100} ,
      {text: 'Expired', value: 250}, 
      {text: 'Completed', value: 380} ,
      {text: 'Escalated', value: 420}, 
      {text: 'Reassigned', value: 620} 
    ]
  }
}
 handleElementClick(clickData) {
   console.log('event data in handle click',clickData);
   const chartData=clickData[0];
   console.log('history in handle click',this.history);
   const label= chartData._model.label;
   console.log('label clicked is ',label);

   this.history.push({
    pathname: '/serviceJobs',
    state: { serviceJobStatus: label }
  })
 }
  render() {
    const {history}=this.props;
    console.log('props in sj  bar chart',history);
    this.history={...history};
    return (
      <MDBContainer>        
        <BarChart width={800}
        height={300} data={this.state.dataPie} options={{ responsive: false }}   onElementsClick={this.handleElementClick} />
      </MDBContainer>
    );
  }
}

export default SjBarChart;