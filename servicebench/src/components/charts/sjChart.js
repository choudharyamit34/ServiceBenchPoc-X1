import React from "react";
import { Pie } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";
import { Doughnut } from 'react-chartjs-2';

class SjPieChart extends React.Component {
  state = {
    dataPie: {
      labels: ["New", "Scheduled", "Accepted", "Rejected", "Closed"],
      datasets: [
        {
          data: [300, 50, 100, 40, 120],
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
 showLog(elems)
 {
console.log(elems);
 }
  render() {
    return (
      <MDBContainer>        
        <Doughnut width={350}
        height={300} data={this.state.dataPie} options={{ responsive: false }}   onElementsClick={this.showLog} />
      </MDBContainer>
    );
  }
}

export default SjPieChart;