import React from "react";
import { Pie } from "react-chartjs-2";
import { Doughnut } from 'react-chartjs-2';
import { MDBContainer } from "mdbreact";

class ClaimPieChart extends React.Component {
  constructor()
  {
  super();
  this.history={};
  this.handleElementClick=this.handleElementClick.bind(this);
  this.state={
    dataPie: {
      labels: ["Approved", "Rejected", "Review", "Completed", "Paid","Transferred"],
      datasets: [
        {
          data: [300, 50, 100, 40, 120,58],
          backgroundColor: [
            "#F7464A",
            "#46BFBD",
            "#FDB45C",
            "#949FB1",
            "#4D5360",
            "#AC64AD"
          ],
          hoverBackgroundColor: [
            "#FF5A5E",
            "#5AD3D1",
            "#FFC870",
            "#A8B3C5",
            "#616774",
            "#DA92DB"
          ]
        }
      ]
    }
  }
}
 handleElementClick(clickData) {
   console.log('event data in handle click',clickData);
   const chartData=clickData[0];
   console.log('history in handle click',this.history);
   const label= chartData._model.label;
   console.log('label clicked is ',label);

   this.history.push({
    pathname: '/claims',
    state: { claimStatus: label }
  })
 }
  render() {
    const {history}=this.props;
    console.log('history in render of Claim chart',history);
    this.history={...history};
       return (
      <MDBContainer>        
        <Doughnut width={300}
        height={300} data={this.state.dataPie} options={{ responsive: false }}   onElementsClick={this.handleElementClick} />
      </MDBContainer>
    );
  }
}

export default ClaimPieChart;