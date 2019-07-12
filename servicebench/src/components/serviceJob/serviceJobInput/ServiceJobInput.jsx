import React, { Component } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import '../../../Stylesheets/container.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import serviceProviderService from '../../../services/serviceProvider.service';

class ServiceJobInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            validate: false,
            id: "",
            serviceJobNumber: "",
            serviceJobType: "R",
            serviceJobStatus: "New",
            serviceJobId: "",
            serviceJobDate: "",
            scheduledServiceJobDate: "",
            serviceProviderId: "",
            customerFirstName: "",
            customerLastName: "",
            city: "",
            state: "",
            postalCode: "",
            addLine1: "",
            addLine2: "",
            addLine3: "",
            mobilePhone: "",
            homePhone: "",
            serviceProviderList: []

        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.updateState = this.updateState.bind(this);
        this.updateServiceJobDate = this.updateServiceJobDate.bind(this);
        this.updateScheduledServiceJobDate = this.updateScheduledServiceJobDate.bind(this);
        this.history = {};

    }

    componentDidMount() {
        serviceProviderService.getServiceProviders().then((data) => {
            this.setState({
                serviceProviderList: data,
                serviceProviderId: data[0].serviceProviderId
            })
        });
    }

    createSPOptions() {
        let options = [];
        this.state.serviceProviderList.length ? this.state.serviceProviderList.map((data) => {
            options.push(<option key={data.serviceProviderId} value={data.serviceProviderId}>{data.serviceProviderId}</option>);
        }) : "";
        return options;
    }

    updateState(e) {
        const field = e.target.id;
        var newState = Object.assign({}, this.state);
        newState[field] = e.target.value;
        this.setState(newState);
    }

    updateServiceJobDate(date) {
        this.setState({
            serviceJobDate: date
        });
    }

    updateScheduledServiceJobDate(date) {
        this.setState({
            scheduledServiceJobDate: date
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        event.stopPropagation();
        const form = event.currentTarget;

        if (form.checkValidity() === false) {
            this.setState({ validated: true });
        } else {
            if (this.state.serviceJobNumber) {
                this.state.serviceJobNumber = "SJKL-" + this.state.serviceJobNumber;
            }
            if (this.state.serviceJobDate) {
                this.state.serviceJobDate = (this.state.serviceJobDate.getMonth() + 1) + '/' + this.state.serviceJobDate.getDate() + '/' + this.state.serviceJobDate.getFullYear();
            }
            if (this.state.scheduledServiceJobDate) {
                this.state.scheduledServiceJobDate = (this.state.scheduledServiceJobDate.getMonth() + 1) + '/' + this.state.scheduledServiceJobDate.getDate() + '/' + this.state.scheduledServiceJobDate.getFullYear();
            }

            console.log(JSON.stringify(this.state, ["serviceJobNumber", "serviceJobType", "serviceJobStatus", "serviceJobId", "serviceJobDate", "scheduledServiceJobDate", "serviceProviderId", "customerFirstName", "customerLastName", "city", "state", "postalCode", "addLine1", "addLine2", "addLine3", "mobilePhone", "homePhone"]));

            fetch("http://localhost:3007/serviceJobs", {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.state, ["serviceJobNumber", "serviceJobType", "serviceJobStatus", "serviceJobId", "serviceJobDate", "scheduledServiceJobDate", "serviceProviderId", "customerFirstName", "customerLastName", "city", "state", "postalCode", "addLine1", "addLine2", "addLine3", "mobilePhone", "homePhone"])
            }).then((response) => {
                console.log(response);
                this.history.push({
                    pathname: '/serviceJobs'
                });
            }, (reject) => {
                console.log(reject);
            });
        }
    }

    render() {
        const { validated } = this.state;
        this.history = { ...this.props.history };
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
                                <Form onSubmit={this.handleSubmit} noValidate validated={validated}>
                                    <Form.Group as={Row} controlId="serviceJobNumber">
                                        <Form.Label column sm={2}>Service Job Number<span style={{ color: 'red' }}>*</span></Form.Label>
                                        <Form.Label column sm={0}>SJKL-</Form.Label>
                                        <Col sm={2}>
                                            <Form.Control required type="number" placeholder="Service Job Number" defaultValue={this.state.serviceJobNumber} onChange={this.updateState} />
                                            <Form.Control.Feedback type="invalid">
                                                Please provide Service Job Number.
                                            </Form.Control.Feedback>
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} controlId="serviceJobType">
                                        <Form.Label column sm={2}>Service Job Type</Form.Label>
                                        <Col sm={1}>
                                            <Form.Control as="select" defaultValue={this.state.serviceJobType} onChange={this.updateState} >
                                                <option>R</option>
                                                <option>W</option>
                                            </Form.Control>
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} controlId="serviceJobStatus">
                                        <Form.Label column sm={2}>Service Job Status</Form.Label>
                                        <Col sm={2}>
                                            <Form.Control as="select" defaultValue={this.state.serviceJobStatus} onChange={this.updateState} >
                                                <option>New</option>
                                                <option>Accepted</option>
                                                <option>Rejected</option>
                                                <option>Expired</option>
                                                <option>Closed</option>
                                            </Form.Control>
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} controlId="serviceJobId">
                                        <Form.Label column sm={2}>Service Job Id<span style={{ color: 'red' }}>*</span></Form.Label>
                                        <Col sm={2}>
                                            <Form.Control required placeholder="Service Job Id" defaultValue={this.state.serviceJobId} onChange={this.updateState} />
                                            <Form.Control.Feedback type="invalid">
                                                Please provide Service Job Id.
                                            </Form.Control.Feedback>
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} controlId="serviceJobDate">
                                        <Form.Label column sm={2}>Service Job Date<span style={{ color: 'red' }}>*</span></Form.Label>
                                        <Col sm={2}>
                                            <DatePicker required selected={this.state.serviceJobDate} onChange={this.updateServiceJobDate} minDate={new Date()} />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} controlId="scheduledServiceJobDate">
                                        <Form.Label column sm={2}>Scheduled Service Job Date<span style={{ color: 'red' }}>*</span></Form.Label>
                                        <Col sm={2}>
                                            <DatePicker required selected={this.state.scheduledServiceJobDate} onChange={this.updateScheduledServiceJobDate} minDate={new Date()} />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} controlId="serviceProviderId">
                                        <Form.Label column sm={2}>Service Provider</Form.Label>
                                        <Col sm={2}>
                                            <Form.Control as="select" defaultValue={this.state.serviceProviderId} onChange={this.updateState} >
                                                {this.createSPOptions()}
                                            </Form.Control>
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} controlId="customerFirstName">
                                        <Form.Label column sm={2}>First Name<span style={{ color: 'red' }}>*</span></Form.Label>
                                        <Col sm={8}>
                                            <Form.Control required placeholder="First Name" defaultValue={this.state.customerFirstName} onChange={this.updateState} />
                                            <Form.Control.Feedback type="invalid">
                                                Please provide First Name.
                                            </Form.Control.Feedback>
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} controlId="customerLastName">
                                        <Form.Label column sm={2}>Last Name</Form.Label>
                                        <Col sm={8}>
                                            <Form.Control placeholder="Last Name" defaultValue={this.state.customerLastName} onChange={this.updateState} />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} controlId="addLine1">
                                        <Form.Label column sm={2}>Address Line 1<span style={{ color: 'red' }}>*</span></Form.Label>
                                        <Col sm={8}>
                                            <Form.Control required placeholder="Address Line 1" defaultValue={this.state.addLine1} onChange={this.updateState} />
                                            <Form.Control.Feedback type="invalid">
                                                Please provide Address Line 1.
                                            </Form.Control.Feedback>
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
                                        <Form.Label column sm={2}>Postal Code<span style={{ color: 'red' }}>*</span></Form.Label>
                                        <Col sm={8}>
                                            <Form.Control required placeholder="Postal Code" defaultValue={this.state.postalCode} onChange={this.updateState} />
                                            <Form.Control.Feedback type="invalid">
                                                Please provide Postal Code.
                                            </Form.Control.Feedback>
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} controlId="city">
                                        <Form.Label column sm={2}>City<span style={{ color: 'red' }}>*</span></Form.Label>
                                        <Col sm={8}>
                                            <Form.Control required placeholder="City" defaultValue={this.state.city} onChange={this.updateState} />
                                            <Form.Control.Feedback type="invalid">
                                                Please provide City.
                                            </Form.Control.Feedback>
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} controlId="state">
                                        <Form.Label column sm={2}>State<span style={{ color: 'red' }}>*</span></Form.Label>
                                        <Col sm={8}>
                                            <Form.Control required placeholder="State" defaultValue={this.state.state} onChange={this.updateState} />
                                            <Form.Control.Feedback type="invalid">
                                                Please provide State.
                                            </Form.Control.Feedback>
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} controlId="mobilePhone">
                                        <Form.Label column sm={2}>Mobile Phone<span style={{ color: 'red' }}>*</span></Form.Label>
                                        <Col sm={8}>
                                            <Form.Control required type="number" placeholder="Mobile Phone" defaultValue={this.state.mobilePhone} onChange={this.updateState} />
                                            <Form.Control.Feedback type="invalid">
                                                Please provide Mobile Phone.
                                            </Form.Control.Feedback>
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