import React from "react";
import { Pie } from "react-chartjs-2";
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

  render() {
    console.log("props in chart",this.props);
    return (
      <MDBContainer>        
        <Pie data={this.state.dataPie} width={300} height={300} options={{ responsive: false }} />
      </MDBContainer>
    );
  }
}

export default ClaimPieChart;