import React from "react";
import { Pie } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";
import { Doughnut } from 'react-chartjs-2';

class PartsPieChart extends React.Component {
  constructor()
  {
    super();
    this.history={};
    this.handleElementClick=this.handleElementClick.bind(this);
    this.state = {
    dataPie: {
      labels: ["Ordered", "Shipped", "In Transit", "In Depot", "Not In Stock"],
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
}
  
handleElementClick(clickData) {
  const chartData=clickData[0];
  const label= chartData._model.label;

  this.history.push({
   pathname: '/parts',
   state: { partStatus: label }
 })
}

  render() {
    const {history}=this.props;
    this.history={...history};
    return (
      <MDBContainer>        
        <Pie data={this.state.dataPie} width={350} height={200}  options={{ responsive: false }} onElementsClick={this.handleElementClick}/>
      </MDBContainer>
    );
  }
}

export default PartsPieChart;