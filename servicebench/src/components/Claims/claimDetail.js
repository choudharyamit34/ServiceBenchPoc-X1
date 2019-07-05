import React, { Component } from 'react';
import claimService from '../../services/claim.service';
// import ReactDataGrid from 'react-data-grid';
import { Link } from 'react-router-dom';
import { Icon, Popup } from 'semantic-ui-react';

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
            <div className='container-fluid'>
                <br />
                <div>
                    <Link to={this.props.history.goBack}>
                    <Popup content="Back" trigger={<Icon name='arrow circle left' size='big' 
                        className="colorLogo" onClick={this.props.history.goBack}/>}/>
                    </Link>
                </div>
                <br />
                <div >
                    <table className='table table-bordered table-dark '>
                        <tbody>
                            <tr>
                                <td ><label >Claim Number</label></td>
                                <td>{data.claimNumber}</td>
                                <td>Claim Type</td>
                                <td>{data.claimType}</td>
                            </tr>

                            <tr>
                                <td>Claim Date</td>
                                <td>{data.claimDate}</td>
                                <td>Submitted Date</td>
                                <td>{data.claimSubmittedDate}</td>
                            </tr>
                            <tr>
                                <td>First Name</td>
                                <td>{data.customerFirstName}</td>
                                <td>Last name</td>
                                <td>{data.customerLastName}</td>
                            </tr>
                            <tr>
                                <td>Mobile Phone</td>
                                <td>{data.mobilePhone}</td>
                                <td>Home Phone</td>
                                <td>{data.homePhone}</td>
                            </tr>
                            <tr>
                                <td>City</td>
                                <td>{data.city}</td>
                                <td>State</td>
                                <td>{data.state}</td>
                            </tr>
                            <tr>
                                <td>Postal Code</td>
                                <td>{data.postalCode}</td>
                                <td>Addrerss Line 1 </td>
                                <td>{data.addLine1}</td>
                            </tr>
                            <tr>
                                <td>Address Line 2</td>
                                <td>{data.addLine2}</td>
                                <td>Addrerss Line 3 </td>
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