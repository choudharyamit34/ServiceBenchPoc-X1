import React, { Component } from 'react';
import partService from '../../services/part.service.js';

class PartDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            part: {},
            id: '',
        }
    }

    componentDidMount() {
        const id = this.props.history.location.state.id
        partService.getPartById(id).then((data) => {
            this.setState({ part: data });
        });
    }

    render() {
        var { part } = this.state;
        if (part[0] != undefined) {
            part = part[0];
        }

        return (
            <div className='container-fluid'>
                <div>
                    <button className="btn btn-primary" onClick={this.props.history.goBack}>Go Back</button>
                </div>
                <div >
                    <table className='table table-bordered table-dark '>
                        <tbody>
                            <tr>
                                <td ><label >Part Number</label></td>
                                <td>{part.partNumber}</td>
                                <td>Part Type</td>
                                <td>{part.partType}</td>
                            </tr>

                            <tr>
                                <td>Cost</td>
                                <td>{part.cost}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>);
    }
}

export default PartDetail;