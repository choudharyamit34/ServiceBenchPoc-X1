import React, { Component } from 'react';
import serviceJobService from '../../../services/serviceJob.service';
const data2 = {};
class SjDetail extends Component {
        constructor() {
          super();
          this.setStateFromApiResult = this.setStateFromApiResult.bind(this);
          this.state = {
            data: {},
            serviceJobNumber:''
          };
        }
    componentDidMount() {
        const serviceJobNumber = this.props.history.location.state.serviceJobNumber
        console.log("service job number before fetch");
        console.log(serviceJobNumber);
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
                data: {...data1}
              });
        
            }
          }

     render() {
        var { data } = this.state;
        //    const {data2}=data[0];
        console.log("data avialble in render ", data);
        console.log("service job number in render ");
        if (data[0] != undefined) {
            console.log(data[0].serviceJobNumber);
            data = data[0];
            console.log("data copied", data);
        }

        return (
            <div>
                <div><button className="btn btn-primary" onClick={this.props.history.goBack}>Go Back</button></div>
                <div className='container'>
                    <table className='table table-bordered table-dark'>
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