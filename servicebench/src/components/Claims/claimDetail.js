import React, { Component } from 'react';
// import ReactDataGrid from 'react-data-grid';

const data2 = {};
class claimDetail extends Component {
    state = {
        data: {},
        claimNumber: ''
    };
    componentDidMount() {
        const claimNumber = this.props.history.location.state.claimNumber
        console.log("CLaim number before fetch");
        console.log(claimNumber);
        fetch(`http://localhost:3007/Claims?claimNumber=${claimNumber}`)
            .then(result => result.json())
            .then(result => {
                this.setState({
                    data: { ...result }

                })
            });

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
            <div>
                <div><button className="btn btn-primary" onClick={this.props.history.goBack}>Go Back</button></div>
                <div className='container'>
                    <table className='table .table-striped'>
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