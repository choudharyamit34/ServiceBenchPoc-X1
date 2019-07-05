import React, { Component } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';

class ServiceJobInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            serviceJobNumber: "",
            serviceJobType: "",
            serviceJobId: "",
            serviceJobDate: "",
            scheduledServiceJobDate: "",
            customerFirstName: "",
            customerLastName: "",
            city: "",
            state: "",
            postalCode: "",
            addLine1: "",
            addLine2: "",
            addLine3: "",
            mobilePhone: "",
            homePhone: ""

        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.updateState = this.updateState.bind(this);
        this.history = {};

    }

    updateState(e) {
        const field = e.target.id;
        var newState = Object.assign({}, this.state);
        newState[field] = e.target.value;
        this.setState(newState);
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log(JSON.stringify(this.state));
        fetch("http://localhost:3007/serviceJobs", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
        }).then((response) => {
            console.log(response);
            this.history.push({
                pathname: '/serviceJobs'
            });
        }, (reject) => {
            console.log(reject);
        });
    }

    render() {
        this.history = { ...this.props.history };
        console.log(this.history);
        console.log(this.props);
        return (
            <div className="container-fluid">
                <div>
                    <button className="btn btn-primary" onClick={this.props.history.goBack}>Go Back</button>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="header">
                                <h4></h4>
                            </div>
                            <div className="content">
                                <Form onSubmit={this.handleSubmit}>
                                    {/* <Form.Group as={Row} controlId="id">
                                        <Form.Label column sm={2}>Id</Form.Label>
                                        <Col sm={8}>
                                            <Form.Control placeholder="Id" defaultValue={this.state.id} onChange={this.updateState} />
                                        </Col>
                                        </Form.Group> */}
                                    <Form.Group as={Row} controlId="serviceJobNumber">
                                        <Form.Label column sm={2}>Service Job Number</Form.Label>
                                        <Col sm={8}>
                                            <Form.Control placeholder="Service Job Number" defaultValue={this.state.serviceJobNumber} onChange={this.updateState} />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} controlId="serviceJobType">
                                        <Form.Label column sm={2}>Service Job Type</Form.Label>
                                        <Col sm={8}>
                                            <Form.Control placeholder="Service Job Type" defaultValue={this.state.serviceJobType} onChange={this.updateState} />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} controlId="serviceJobId">
                                        <Form.Label column sm={2}>Service Job Id</Form.Label>
                                        <Col sm={8}>
                                            <Form.Control placeholder="Service Job Id" defaultValue={this.state.serviceJobId} onChange={this.updateState} />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} controlId="serviceJobDate">
                                        <Form.Label column sm={2}>Service Job Date</Form.Label>
                                        <Col sm={8}>
                                            <Form.Control placeholder="Service Job Date" defaultValue={this.state.serviceJobDate} onChange={this.updateState} />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} controlId="scheduledServiceJobDate">
                                        <Form.Label column sm={2}>Scheduled Service Job Date</Form.Label>
                                        <Col sm={8}>
                                            <Form.Control placeholder="Scheduled Service Job Date" defaultValue={this.state.scheduledServiceJobDate} onChange={this.updateState} />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} controlId="customerFirstName">
                                        <Form.Label column sm={2}>First Name</Form.Label>
                                        <Col sm={8}>
                                            <Form.Control placeholder="First Name" defaultValue={this.state.customerFirstName} onChange={this.updateState} />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} controlId="customerLastName">
                                        <Form.Label column sm={2}>Last Name</Form.Label>
                                        <Col sm={8}>
                                            <Form.Control placeholder="Last Name" defaultValue={this.state.customerLastName} onChange={this.updateState} />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} controlId="addLine1">
                                        <Form.Label column sm={2}>Address Line 1</Form.Label>
                                        <Col sm={8}>
                                            <Form.Control placeholder="Address Line 1" defaultValue={this.state.addLine1} onChange={this.updateState} />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} controlId="addLine2">
                                        <Form.Label column sm={2}>Address Line 2</Form.Label>
                                        <Col sm={8}>
                                            <Form.Control placeholder="Address Line 2" defaultValue={this.state.addLine2} onChange={this.updateState} />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} controlId="addLine3">
                                        <Form.Label column sm={2}>Address Line 3</Form.Label>
                                        <Col sm={8}>
                                            <Form.Control placeholder="Address Line 3" defaultValue={this.state.addLine3} onChange={this.updateState} />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} controlId="postalCode">
                                        <Form.Label column sm={2}>Postal Code</Form.Label>
                                        <Col sm={8}>
                                            <Form.Control placeholder="Postal Code" defaultValue={this.state.postalCode} onChange={this.updateState} />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} controlId="city">
                                        <Form.Label column sm={2}>City</Form.Label>
                                        <Col sm={8}>
                                            <Form.Control placeholder="City" defaultValue={this.state.city} onChange={this.updateState} />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} controlId="state">
                                        <Form.Label column sm={2}>State</Form.Label>
                                        <Col sm={8}>
                                            <Form.Control placeholder="State" defaultValue={this.state.state} onChange={this.updateState} />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} controlId="mobilePhone">
                                        <Form.Label column sm={2}>Mobile Phone</Form.Label>
                                        <Col sm={8}>
                                            <Form.Control placeholder="Mobile Phone" defaultValue={this.state.mobilePhone} onChange={this.updateState} />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} controlId="homePhone">
                                        <Form.Label column sm={2}>Home Phone</Form.Label>
                                        <Col sm={8}>
                                            <Form.Control type="number" placeholder="Home Phone" defaultValue={this.state.homePhone} onChange={this.updateState} />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row}>
                                        <Col sm={{ span: 10, offset: 2 }}>
                                            <Button type="submit">Submit</Button>
                                        </Col>
                                    </Form.Group>
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>

            </div >


        );
    }
}

export default ServiceJobInput;