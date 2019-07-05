import React, { Component } from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import partService from '../../services/part.service.js';
import { Link } from 'react-router-dom';
import { Icon } from 'semantic-ui-react';

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
            sizePerPage: 10,
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
            <div className="container-fluid">
                <br />
                <div>
                    <Link to={this.props.history.goBack}>
                        <Icon name='arrow circle left' size='big' className="colorLogo" onClick={this.props.history.goBack}></Icon>
                    </Link>
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
                                    >
                                        Part Number
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