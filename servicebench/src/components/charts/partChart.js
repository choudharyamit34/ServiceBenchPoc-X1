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
    console.log('history in part chart render ',history);
    this.history={...history};
    let height=225;
    let  width=320;
     if(this.props.height!=undefined && this.props.height!='')
     {
       
       height=this.props.height;
     }
     if(this.props.width!=undefined && this.props.width!='')
     {
       width=this.props.width;
     }
     console.log('Height recieved as props in sj chart',height);
     console.log('width recieved as props in sj chart',width);
    return (
      <MDBContainer>        
        <Pie data={this.state.dataPie} width={width} height={height}  options={{ responsive: false }} onElementsClick={this.handleElementClick}/>
      </MDBContainer>
    );
  }
}

export default PartsPieChart;