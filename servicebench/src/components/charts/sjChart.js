import React from "react";
import { Pie } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";
import { Doughnut } from 'react-chartjs-2';

class SjPieChart extends React.Component {
  state = {
    dataPie: {
      labels: ["New", "Re Assign", "Accepted", "Rejected", "Closed"],
      datasets: [
        {
          data: [300, 50, 100, 40, 120],
          backgroundColor: [
            "blue",
            "#46BFBD",
            "#FDB45C",
            "#949FB1",
            "red",
            "Green"
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
    return (
      <MDBContainer>        
        <Doughnut width={300}
        height={300} data={this.state.dataPie} options={{ responsive: false }}   onElementsClick={this.handleElementClick} />
      </MDBContainer>
    );
  }
}

export default SjPieChart;