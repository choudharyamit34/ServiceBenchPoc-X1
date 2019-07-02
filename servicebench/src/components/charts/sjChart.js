import React from "react";
import { Pie } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";
import { Doughnut } from 'react-chartjs-2';

class SjPieChart extends React.Component {
  constructor()
  {
    super();
    this.history={};
    this.handleElementClick=this.handleElementClick.bind(this);
    this.state={
    dataPie: {
      labels: ["New", "Expired", "Accepted", "Rejected", "Closed"],
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
    console.log('props in sj chart',history);
    this.history={...history};
    return (
      <MDBContainer>        
        <Doughnut width={300}
        height={300} data={this.state.dataPie} options={{ responsive: false }}   onElementsClick={this.handleElementClick} />
      </MDBContainer>
    );
  }
}

export default SjPieChart;