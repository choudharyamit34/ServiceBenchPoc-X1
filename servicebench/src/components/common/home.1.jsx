import React ,{Component} from 'react';
import Dashboard from '../../app/Dashboard';


class Home1 extends Component {
  render() {
    const {history}=this.props;
    // console.log('props in Home',history);
    return ( 
        <div className='container'>
        <Dashboard history={history}/>
      </div>
    )
  }
}
  
export default Home1;