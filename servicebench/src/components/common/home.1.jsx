import React from 'react';
import ChartsPage from './pieChart';
import SjPieChart from '../charts/sjChart';


import { Card, Button, CardImg, CardTitle, CardText, CardColumns,
    CardSubtitle, CardBody} from 'reactstrap';
import Dashboard from '../../app/Dashboard';


const Home1 = () => (
    <div className='container'>
      <Dashboard/>
    
{/* 
      <CardColumns>
      <Card>          
        <CardBody>
          <CardTitle>Service Jobs</CardTitle>
          <ChartsPage />
        </CardBody>
      </Card>
      <Card>
          <CardBody>
          <CardTitle>Claims</CardTitle>
           <SjPieChart />
          </CardBody>
      
      </Card>
          
    </CardColumns>
    */}



    </div>
)

export default Home1;