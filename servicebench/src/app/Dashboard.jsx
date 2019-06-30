import React, { Component } from 'react'
import NavgationComponent from '../components/navigation/NavgationComponent';
import ChartComponent from '../components/charts/ChartComponent';
export default class Dashboard extends Component {
  render() {
    return (
      <React.Fragment>
        {/* <NavgationComponent /> commented to show header menu*/}
        <ChartComponent />
      </React.Fragment>
    )
  }
}
