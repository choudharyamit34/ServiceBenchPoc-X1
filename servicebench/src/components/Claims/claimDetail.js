import React, { Component } from 'react';
import claimService from '../../services/claim.service';
// import ReactDataGrid from 'react-data-grid';
import { Link } from 'react-router-dom';
import { Icon, Popup } from 'semantic-ui-react';
import '../../Stylesheets/container.css';

const data2 = {};
class claimDetail extends Component {
    constructor(){
        super();
        this.state= {
        data: {},
        claimNumber: '',
        }
        this.setStateFromApiResult=this.setStateFromApiResult.bind(this);
    }
    componentDidMount() {
        const claimNumber = this.props.history.location.state.claimNumber
        console.log("CLaim number before fetch");
        console.log(claimNumber);
        claimService.getClaimByClaimNumber(claimNumber).then((data) => {
        console.log("data in did mount in claim details after api call",data);
            this.setStateFromApiResult(data);
    
          });
        // fetch(`http://localhost:3007/Claims?claimNumber=${claimNumber}`)
        //     .then(result => result.json())
        //     .then(result => {
        //         this.setState({
        //             data: { ...result }

        //         })
        //     });

    }
    setStateFromApiResult = function (data1) {
        console.log("data from getClaimbyClaimNumber api call", data1);
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
        console.log("Claim number in render ");
        if (data[0] != undefined) {
            console.log(data[0].claimNumber);
            data = data[0];
            console.log("data copied", data);
        }

        return (
            <div className='container-fluid container_position'>              
                <div>
                    <br></br>
                   <td>
                        <Link to={this.props.history.goBack}>
                            <Popup content="Back" trigger={<Icon name='arrow circle left' size='big' 
                                className="colorLogo" onClick={this.props.history.goBack}/>}/>
                            </Link>                    
                    </td>
                    <td className="h2_td_details" >
                         <h2  className='h2_details'> Claim Detail - {data.claimNumber} </h2> 
                   </td>
                </div>  
                <br></br>             
                <div >
                    <table className='table table-bordered  '>
                        <tbody>
                            <tr>
                                <td ><b >Claim Number</b></td>
                                <td>{data.claimNumber}</td>
                                <td><b>Claim Type</b></td>
                                <td>{data.claimType}</td>
                            </tr>

                            <tr>
                                <td><b>Claim Date</b></td>
                                <td>{data.claimDate}</td>
                                <td><b>Submitted Date</b></td>
                                <td>{data.claimSubmittedDate}</td>
                            </tr>
                            <tr>
                                <td><b>First Name</b></td>
                                <td>{data.customerFirstName}</td>
                                <td><b>Last name</b></td>
                                <td>{data.customerLastName}</td>
                            </tr>
                            <tr>
                                <td><b>Mobile Phone</b></td>
                                <td>{data.mobilePhone}</td>
                                <td><b>Home Phone</b></td>
                                <td>{data.homePhone}</td>
                            </tr>
                            <tr>
                                <td><b>City</b></td>
                                <td>{data.city}</td>
                                <td><b>State</b></td>
                                <td>{data.state}</td>
                            </tr>
                            <tr>
                                <td><b>Postal Code</b></td>
                                <td>{data.postalCode}</td>
                                <td><b>Addrerss Line 1</b> </td>
                                <td>{data.addLine1}</td>
                            </tr>
                            <tr>
                                <td><b>Address Line 2</b></td>
                                <td>{data.addLine2}</td>
                                <td><b>Addrerss Line 3 </b></td>
                                <td>{data.addLine3}</td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default claimDetail;