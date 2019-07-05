import React, { Component } from 'react';
import partService from '../../services/part.service.js';
import { Link } from 'react-router-dom';
import { Icon, Popup} from 'semantic-ui-react';

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
                                <td ><label >Part Number</label></td>
                                <td>{part.partNumber}</td>
                                <td>Part Type</td>
                                <td>{part.partType}</td>
                            </tr>

                            <tr>
                                <td>Part Status</td>
                                <td>{part.partStatus}</td>
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