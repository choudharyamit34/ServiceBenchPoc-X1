import React, { Component } from 'react';
import { Modal,Button } from 'react-bootstrap';
class VerticallyCenteredModal extends Component {
  constructor(props) {
    super(props)
    this.closeHandler = this.closeHandler.bind(this);
    this.logoutHandler = this.logoutHandler.bind(this);
    this.state = {
      show: true
    };
    this.history={};
}
logoutHandler(e) {
    e.preventDefault();
    this.history.push('/login');
}

closeHandler(e){
  e.preventDefault();
  this.history.push('/home');
}

    render() {
this.history={... this.props.history};
      return (
        <Modal
          {...this.props.show}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          show={this.state.show}
        >
          <Modal.Header>
            <Modal.Title id="contained-modal-title-vcenter">
             Confirm Logout
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>
             Are you sure you want to logout?
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.logoutHandler}>Logout</Button>
            <Button onClick={this.closeHandler}>Close</Button>
          </Modal.Footer>
        </Modal>
      );
    }
  }

  export default VerticallyCenteredModal;
  