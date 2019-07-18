import React, { Component } from 'react';
import partService from '../../services/part.service.js';
import { Link } from 'react-router-dom';
import { Icon, Popup} from 'semantic-ui-react';
import '../../Stylesheets/container.css';

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
            <div className='container-fluid container_position'>
                <br />
                <div>
                <td>
                        <Link to={this.props.history.goBack}>
                            <Popup content="Back" trigger={<Icon name='arrow circle left' size='big' 
                                className="colorLogo" onClick={this.props.history.goBack}/>}/>
                            </Link>                    
                    </td>
                    <td className="h2_td_details" >
                         <h2  className='h2_details'> Parts Detail - {part.partNumber} </h2> 
                   </td>
                </div>
                <br />
                <div >
                    <table className='table table-bordered  '>
                        <tbody>
                            <tr>
                                <td ><b >Part Number</b></td>
                                <td>{part.partNumber}</td>
                                <td><b>Part Type</b></td>
                                <td>{part.partType}</td>
                            </tr>

                            <tr>
                                <td><b>Serial Number</b></td>
                                <td>{part.serialNumber}</td>
                                <td><b>Model Number</b></td>
                                <td>{part.modelNumber}</td>
                            </tr>
                            <tr>
                                <td><b>Part Status</b></td>
                                <td>{part.partStatus}</td>
                                <td><b>Cost</b></td>
                                <td>{part.cost}</td>
                            </tr>
                            <tr>
                                <td><b>Ordered By </b></td>
                                <td>{part.serviceProviderId}</td>   
                                <td></td>      
                                <td></td>                          
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>);
    }
}

export default PartDetail;