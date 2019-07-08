import React, { Component } from 'react';
import { BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import claimService from '../../services/claim.service';
import { Link } from 'react-router-dom';
import { Icon, Popup } from 'semantic-ui-react';


const data = [];
class ClaimListTable extends Component {
  constructor(props) {
    super(props);
    this.history={};
    this.state = {
      data: []
    };
    this.setStateFromApiResult = this.setStateFromApiResult.bind(this);
  }
  setStateFromApiResult = function (data1) {
    console.log("data from api call", data1);
    if (data1 != undefined) {
      this.setState({
        data: data1
      });

    }
  }
  componentDidMount() {     
      let claimStatus='';
      if ( this.props.history.location.state != undefined && this.props.history.location.state != '') {
        claimStatus= this.props.history.location.state.claimStatus;
      console.log('claim Status in did mount of claim list component :-',claimStatus);
      }
      if (claimStatus != undefined && claimStatus != '' ) {
        console.log('calling by status for status : -',claimStatus);
        claimService.getClaimsByClaimStatus(claimStatus).then((data) => {
          this.setStateFromApiResult(data);
        })
      }
      else {
        console.log('Searching all Claims as Claims Status  is null: -',claimStatus);
        claimService.getAllClaims().then((data) => {
          this.setStateFromApiResult(data);
  
        });
      }   

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
      sizePerPage: 4,
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
         <br />
                <div>
                    <Link to={this.props.history.goBack}>
                    <Popup content="Back" trigger={<Icon name='arrow circle left' size='big' 
                        className="colorLogo" onClick={this.props.history.goBack}/>}/>
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
                    filter={{ type: 'TextFilter' }}
                    >
                    Claim Number
                  </TableHeaderColumn>
                  <TableHeaderColumn
                    dataField='claimStatus'
                    width="15%"
                    filter={ { type: 'TextFilter'} }
                    dataSort>
                    Claim Status
                  </TableHeaderColumn>
                  <TableHeaderColumn
                    dataField='claimType'
                    width="15%"
                    filter={ { type: 'TextFilter'} }
                    dataSort>
                    Claim Type
                  </TableHeaderColumn>
                  <TableHeaderColumn
                    dataField='serviceProvicerId'                  
                    width="15%"
                    dataSort
                    filter={{ type: 'TextFilter' }}
                  >
                    Service Provider
                  </TableHeaderColumn>
                  <TableHeaderColumn
                    dataField='claimDate'
                    width="15%"
                    filter={{ type: 'TextFilter' }}
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
                    filter={{ type: 'TextFilter' }}
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