import React from 'react';
import Home from '../common/home';
import ServiceJobListTable from '../serviceJob/serviceJobList/serviceJobListTable';
import ClaimListTable from '../Claims/claimList';
import {Switch, Route, Redirect} from 'react-router-dom';
import PageNotFound from '../common/pagenotfound';

const Body = () => (
  
  <Switch>
      <Route exact path='/' 
      render={ () => (<Redirect to='/home'/> )} />
      <Route path='/home' component = {Home}/>
      <Route path='/serviceJobs' component = {ServiceJobListTable}/>   
      <Route path='/claims' component = {ClaimListTable}/>  
      <Route path='*' component = {PageNotFound}/>
  </Switch>
)
  export default Body;