import React from "react";
import { Pie } from "react-chartjs-2";
import { Doughnut } from 'react-chartjs-2';
import { MDBContainer } from "mdbreact";

class ClaimPieChart extends React.Component {
  state = {
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
  handleElementClick(elems) {
    console.log("handleElementClick");
  }
  render() {
    console.log("props in chart",this.props);
    return (
      <MDBContainer>        
        <Doughnut width={300}
        height={300} data={this.state.dataPie} options={{ responsive: false }}   onElementsClick={this.handleElementClick} />
      </MDBContainer>
    );
  }
}

export default ClaimPieChart;