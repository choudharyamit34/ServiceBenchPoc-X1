import React, { Component } from 'react';
import { BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';


const data =[];
class ClaimListTable extends Component {
    state = {
        data: []
    };
    
    componentDidMount() {
    const url =   `http://localhost:3007/Claims`;
        fetch(url)
            .then(result => result.json())
            .then(result => {
                this.setState({
                    data: result
                })
            });
    }


  removeItem = itemId => {
    this.setState({
      data: data.filter(item => item.id !== itemId)
    });
  }

  render() {
    const { data } = this.state;
    const history = this.props.history;
    console.log(data);
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
        console.log(row.claimNumber);
        const claimNumber = row.claimNumber;
        history.push({
          pathname: '/claimDetail',
          state: { claimNumber: claimNumber }
        })
      }
    };

    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="header">
                <h4></h4>                
              </div>
              <div className="content">
                <BootstrapTable
                data={data}
                  bordered={false}
                  striped
                  pagination={true}
                  options={options}>
                  <TableHeaderColumn
                    dataField='claimNumber'
                    isKey
                    width="15%"
                    dataSort
                    >
                    Claim Number
                  </TableHeaderColumn>
                  <TableHeaderColumn
                    dataField='claimType'
                    width="15%"
                    filter={ { type: 'TextFilter'} }
                    dataSort>
                    Claim Type
                  </TableHeaderColumn>
                  <TableHeaderColumn
                    dataField='claimDate'
                    width="15%"
                    dataSort>
                    Claim Date
                  </TableHeaderColumn>
                  <TableHeaderColumn
                    dataField='customerFirstName'
                    filter={ { type: 'TextFilter'} }
                    width="15%"
                    dataSort>
                    First Name
                  </TableHeaderColumn>
                  <TableHeaderColumn
                    dataField='customerLastName'
                    filter={ { type: 'TextFilter'} }
                    width="15%">
                    Last Name
                  </TableHeaderColumn>
                  <TableHeaderColumn
                    dataField='claimSubmittedDate'
                    width="30%">
                    Claim Submitted Date
                  </TableHeaderColumn>
                  <TableHeaderColumn width="20%"></TableHeaderColumn>
                </BootstrapTable>
              </div>
            </div>
          </div>
        </div>
      </div>

    );
  }
}
export default ClaimListTable