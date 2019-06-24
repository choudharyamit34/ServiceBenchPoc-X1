import React from 'react';
import Home from '../common/home';
import ServiceJobListTable from '../serviceJob/serviceJobList/serviceJobListTable';
import SjDetail from '../serviceJob/serviceJobDetails/sjDetail';
import ClaimListTable from '../Claims/claimList';
import ClaimDetail from '../Claims/claimDetail';
import {Switch, Route, Redirect} from 'react-router-dom';
import PageNotFound from '../common/pagenotfound';
import history from '..//../app/history';
const Body = () => (
  
  <Switch history={history}>
      <Route exact path='/' 
      render={ () => (<Redirect to='/home'/> )} />
      <Route path='/home' component = {Home}/>
      <Route path='/serviceJobs' component = {ServiceJobListTable} history={history}/>   
      <Route path='/serviceJobDetail' component = {SjDetail} history={history}/> 
      <Route path='/claims' component = {ClaimListTable}/>  
      <Route path='/claimDetail' component = {ClaimDetail} history={history}/> 
      <Route path='*' component = {PageNotFound}/>
  </Switch>
)
  export default Body;