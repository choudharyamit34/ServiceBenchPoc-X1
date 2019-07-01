import React, { Component } from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import partService from '../../services/part.service.js';

class PartList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: []
        };
    }

    componentDidMount() {
        const url = `http://localhost:3007/parts`;
        partService.getAllParts().then((data) => {
            this.setState({ list: data });

        });
    }

    render() {
        const { list } = this.state;
        const history = this.props.history;
        // console.log(data);
        const options = {
            sizePerPage: 10,
            prePage: 'Previous',
            nextPage: 'Next',
            firstPage: 'First',
            lastPage: 'Last',
            hideSizePerPage: true,
            onRowDoubleClick: function (row) {
                console.log(row);
                console.log(history);
                console.log(row.id);
                const id = row.id;
                history.push({
                    pathname: '/partDetail',
                    state: { id: id }
                })
            }
        };

        return (
            <div className="container-fluid">
                <div><button className="btn btn-primary" onClick={this.props.history.goBack}>Go Back</button></div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="header">
                                <h4></h4>
                            </div>
                            <div className="content">
                                <BootstrapTable
                                    data={list}
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