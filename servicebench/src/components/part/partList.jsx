import React, { Component } from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import partService from '../../services/part.service.js';
import { Link } from 'react-router-dom';
import { Icon, Popup } from 'semantic-ui-react';
import '../../Stylesheets/container.css';


class PartList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            parts: []
        };
    }

    componentDidMount() {
        const history = this.props.history;
        let partStatus = '';
        if (this.props.history.location.state != undefined && this.props.history.location.state != '') {
            partStatus = this.props.history.location.state.partStatus;
        }
 
        if (partStatus != undefined && partStatus != '') {
            partService.getPartsByStatus(partStatus).then((data) => {
                this.setState({ parts: data });
    
            })
        } else {
            partService.getAllParts().then((data) => {
                this.setState({ parts: data });
    
            })
        }
    }

    render() {
        const { parts } = this.state;
        const history = this.props.history;
        const options = {
            sizePerPage: 5,
            prePage: 'Previous',
            nextPage: 'Next',
            firstPage: 'First',
            lastPage: 'Last',
            hideSizePerPage: true,
            onRowDoubleClick: function (row) {
                const id = row.id;
                history.push({
                    pathname: '/partDetail',
                    state: { id: id }
                })
            }
        };

        return (
            <div className="container-fluid container_position">
                <br />
                <div>
                <td><Link to={this.props.history.goBack}>
                            <Popup content="Back" trigger={<Icon name='arrow circle left' size='big' 
                                className="colorLogo" onClick={this.props.history.goBack}/>}/>
                            </Link>                    
                    </td>
                    <td className="h2_td_details" >
                         <h2  className='h2_details'> Parts </h2> 
                   </td>
                </div>
                <br />
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="header">
                                <h4></h4>
                            </div>
                            <div className="content">
                                <BootstrapTable
                                    data={parts}
                                    bordered={false}
                                    striped
                                    pagination={true}
                                    options={options}>
                                    <TableHeaderColumn
                                        dataField='partNumber'
                                        isKey
                                        width="15%"
                                        dataSort
                                        filter={{ type: 'TextFilter' }}
                                    >
                                        Part Number
                                    </TableHeaderColumn>
                                    <TableHeaderColumn
                                        dataField='modelNumber'
                                        width="15%"
                                        filter={{ type: 'TextFilter' }}
                                        dataSort>
                                         Model Number
                                    </TableHeaderColumn>
                                    <TableHeaderColumn
                                        dataField='serialNumber'
                                        width="15%"
                                        filter={{ type: 'TextFilter' }}
                                        dataSort>
                                        Serial Number
                                    </TableHeaderColumn>
                                    <TableHeaderColumn
                                        dataField='partType'
                                        width="15%"
                                        filter={{ type: 'TextFilter' }}
                                        dataSort>
                                        Part Type
                                    </TableHeaderColumn>
                                    <TableHeaderColumn
                                        dataField='partStatus'
                                        width="15%"
                                        filter={{ type: 'TextFilter' }}
                                        dataSort>
                                        Part Status
                                    </TableHeaderColumn>
                                    <TableHeaderColumn
                                        dataField='cost'
                                        width="15%"
                                        dataSort>
                                        Part Cost
                                    </TableHeaderColumn>
                                    
                                </BootstrapTable>
                            </div>
                        </div>
                    </div>
                </div>
            </div>);
    }
}

export default PartList;