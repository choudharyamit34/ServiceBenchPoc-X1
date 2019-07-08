import React ,{Component} from 'react';
import Dashboard from '../../app/Dashboard';

import '../../Stylesheets/container.css';
class Home1 extends Component {
  render() {
    const {history}=this.props;
    // console.log('props in Home',history);
    return ( 
        <div className='container container_position'>
        <Dashboard history={history}/>
      </div>
    )
  }
}
  
export default Home1;