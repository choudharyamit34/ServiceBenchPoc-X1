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
   let fromPath='';
   let spId='';
   if (this.props.history.location.state != undefined && this.props.history.location.state != '') {
    fromPath=this.history.location.state.fromPath;
   spId=this.history.location.state.serviceProviderId;
   }

  
  console.log('fromPath in SJ chart',fromPath);
  console.log('SP Id  in SJ chart',spId);

   this.history.push({
    pathname: '/serviceJobs',
    state: { serviceJobStatus: label,
      fromPath:fromPath,
      spId:spId
     }
  })
 }
  render() {
    console.log('Props in Sj chart',this.props)
    const {history}=this.props;
    console.log('History in sj chart',history);
    this.history={...history};
    let height=210;
   let  width=300;
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
        <Doughnut width={width}
        height={height} data={this.state.dataPie} options={{ responsive: false }}   onElementsClick={this.handleElementClick} />
      </MDBContainer>
    );
  }
}

export default SjPieChart;