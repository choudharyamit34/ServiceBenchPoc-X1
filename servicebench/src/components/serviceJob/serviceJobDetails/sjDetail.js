import React, { Component } from 'react';
import serviceJobService from '../../../services/serviceJob.service';
import serviceProviderService from '../../../services/serviceProvider.service';
import { Link } from 'react-router-dom';
import { Icon, Popup } from 'semantic-ui-react';
import '../../../Stylesheets/container.css';
import '../css/serviceJobs.css';
const data2 = {};
class SjDetail extends Component {
    constructor() {
        super();
        this.setStateFromApiResult = this.setStateFromApiResult.bind(this);
        this.state = {
            data: {},
            serviceJobNumber: ''
        };
    }
    componentDidMount() {
        const serviceJobNumber = this.props.history.location.state.serviceJobNumber
        console.log("service job number before fetch");
        console.log(serviceJobNumber);
        let jobData={};
        serviceJobService.getAllServicejobBySjnumber(serviceJobNumber).then((data) => {
            this.setStateFromApiResult(data);
        });
        // fetch(`http://localhost:3007/ServiceJobs?serviceJobNumber=${serviceJobNumber}`)
        //     .then(result => result.json())
        //     .then(result => {
        //         this.setState({
        //             data: {...result}

        //         })
        //     });

    }
    setStateFromApiResult = function (data1) {
        console.log("data from api call", data1);
        if (data1 != undefined) {
            this.setState({
                data: { ...data1 }
            });

        }
    }

    render() {
        var { data } = this.state;
        // var {spDetails}=this.state.spDetails;
        //    const {data2}=data[0];
        console.log("data avialble in render ", data);
        console.log("service job number in render ");
        if (data[0] != undefined) {
            console.log(data[0].serviceJobNumber);
            data = data[0];
            console.log("data copied", data);
        }

        return (
            <div className="container-fluid container_position">
                <br />
                <div>
                    <td>
                        <Link to={this.props.history.goBack}>
                            <Popup content="Back" trigger={<Icon name='arrow circle left' size='big' 
                                className="colorLogo" onClick={this.props.history.goBack}/>}/>
                            </Link>                    
                    </td>
                    <td className="h2_td_details" >
                         <h2  className='h2_details'> Service Job Details - {data.serviceJobNumber}</h2> 
                   </td>
                </div>  
                <br></br>             
                <div >
                    <table className='table table-bordered '>
                        <tbody>
                            <tr>
                                <td > <b color={'grey'}>Service Job Number</b></td>
                                <td>{data.serviceJobNumber}</td>
                                <td><b color={'grey'}>Service Job Type</b></td>
                                <td>{data.serviceJobType}</td>
                            </tr>

                            <tr>
                                <td><b color={'grey'}>Service Job Date</b></td>
                                <td>{data.serviceJobDate}</td>
                                <td><b color={'grey'}>Scheduled ServiceJob Date</b></td>
                                <td>{data.scheduledServiceJobDate}</td>
                            </tr>
                            <tr>
                                <td><b color={'grey'}>service Provider Id </b></td>
                                <td>{data.serviceProviderId}</td>
                                <td></td>
                                <td></td>
                                
                            </tr>                           
                            <tr>
                                <td><b color={'grey'}>First Name</b></td>
                                <td>{data.customerFirstName}</td>
                                <td><b color={'grey'}>Last name</b></td>
                                <td>{data.customerLastName}</td>
                            </tr>
                            <tr>
                                <td><b color={'grey'}>Mobile Phone</b></td>
                                <td>{data.mobilePhone}</td>
                                <td><b color={'grey'}>Home Phone</b></td>
                                <td>{data.homePhone}</td>
                            </tr>
                            <tr>
                                <td><b color={'grey'}>City</b></td>
                                <td>{data.city}</td>
                                <td><b color={'grey'}>State</b></td>
                                <td>{data.state}</td>
                            </tr>
                            <tr>
                                <td><b color={'grey'}>Postal Code</b></td>
                                <td>{data.postalCode}</td>
                                <td><b color={'grey'}>Addrerss Line 1</b> </td>
                                <td>{data.addLine1}</td>
                            </tr>
                            <tr>
                                <td><b color={'grey'}>Address Line 2</b></td>
                                <td>{data.addLine2}</td>
                                <td><b color={'grey'}>Addrerss Line 3 </b></td>
                                <td>{data.addLine3}</td>
                            </tr>
                       

                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default SjDetail;