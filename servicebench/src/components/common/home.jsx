import React from 'react';
import ChartsPage from './pieChart';


import { Card, Button, CardImg, CardTitle, CardText, CardColumns,
    CardSubtitle, CardBody} from 'reactstrap';


const Home = () => (
    <div className='container'>
    

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
          <ChartsPage />
          </CardBody>
      
      </Card>
      <Card>
      <CardBody>
          <CardTitle>Service Jobs</CardTitle>
          <ChartsPage />
          </CardBody>
      </Card>
      
    </CardColumns>



    </div>
)

export default Home;