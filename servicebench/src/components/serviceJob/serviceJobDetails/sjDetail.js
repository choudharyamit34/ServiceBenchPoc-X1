import React, { Component } from 'react';

const data = [];
class SjDetail extends Component {
    state = {
        data: [],
        serviceJobNumber: ''
    };
    componentDidMount() {
        const serviceJobNumber = this.props.history.location.state.serviceJobNumber
        console.log("service job number before fetch");
        console.log(serviceJobNumber);
        fetch(`http://localhost:3007/ServiceJobs?serviceJobNumber=${serviceJobNumber}`)
            .then(result => result.json())
            .then(result => {
                this.setState({
                    data: result

                })
            });

    }

    render() {
        const { data } = this.state;
        console.log("data avialble in render ");
        console.log(data);
        console.log("service job number in render ");
        console.log(this.state.data.serviceJobNumber);
        return (
            <div>
                <div><button class="btn btn-link" onClick={this.props.history.goBack}>Go Back</button></div>
                <div className="container">
                    <table className='table table-bordered table-hover'>
                        <tbody>
                            <tr>
                                <td>serviceJobNumber</td>
                                <td>{this.state.data.serviceJobNumber}</td>
                            </tr>

                            <tr>
                                <td>Description</td>
                                <td>{this.state.description}</td>
                            </tr>

                            <tr>
                                <td>Price ($)</td>
                                <td>${parseFloat(this.state.price).toFixed(2)}</td>
                            </tr>

                            <tr>
                                <td>Category</td>
                                <td>{this.state.category_name}</td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default SjDetail;