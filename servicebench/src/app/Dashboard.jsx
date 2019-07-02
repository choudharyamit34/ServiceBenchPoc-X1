import React, { Component } from 'react'
import NavgationComponent from '../components/navigation/NavgationComponent';
import ChartComponent from '../components/charts/ChartComponent';
import CarouselComponent from '../components/carousel/CarouselComponent';

export default class Dashboard extends Component {
  render() {
    const {history}=this.props;
    // console.log('props in Dashboard',history);
    return (
      <React.Fragment>
        {/* <NavgationComponent /> commented to show header menu*/}
        <CarouselComponent/>
         <ChartComponent history={history}/>
      </React.Fragment>
    )
  }
}
