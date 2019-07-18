import React, { Component } from 'react';
import VerticallyCenteredModal from '../modal/VerticallyCenteredModal';

class LogoutComponent extends Component {
  
    render() {
      const {history}=this.props;
       return (
          <VerticallyCenteredModal
            show={true} history={history}/>
          );
    }
  }
  export default LogoutComponent;