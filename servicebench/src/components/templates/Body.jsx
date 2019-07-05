import React from 'react';
import Home from '../common/home';
import ServiceJobListTable from '../serviceJob/serviceJobList/serviceJobListTable';
import SjDetail from '../serviceJob/serviceJobDetails/sjDetail';
import ClaimListTable from '../Claims/claimList';
import ClaimDetail from '../Claims/claimDetail';
import { Switch, Route, Redirect } from 'react-router-dom';
import PageNotFound from '../common/pagenotfound';
import history from '..//../app/history';
import Home1 from '../common/home.1';
import PartList from '../part/partList';
import PartDetail from '../part/partDetail';
import ServiceJobInput from '../serviceJob/serviceJobInput/ServiceJobInput';
import LoginComponent from '../login/LoginComponent';
const Body = () => (

  <Switch history={history}>
    <Route exact path='/'
      render={() => (<Redirect to='/login' />)} />
    <Route path='/login' component={LoginComponent} />
    <Route path='/home' component={Home1} />
    <Route path='/serviceJobs' component={ServiceJobListTable} history={history} />
    <Route path='/serviceJobDetail' component={SjDetail} history={history} />
    <Route path='/claims' component={ClaimListTable} />
    <Route path='/claimDetail' component={ClaimDetail} history={history} />
    <Route path='/parts' component={PartList} />
    <Route path='/partDetail' component={PartDetail} history={history} />
    <Route path='/addServiceJob' component = {ServiceJobInput} history={history}/> 
    <Route path='*' component={PageNotFound} />
  </Switch>
)

export default Body;