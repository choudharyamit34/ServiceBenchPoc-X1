import React, { Component } from 'react';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import serviceJobService from '../../../services/serviceJob.service';

const data = [];
class ServiceJobListTable extends Component {
  constructor() {
    super();
    this.setStateFromApiResult = this.setStateFromApiResult.bind(this);
    this.state = {
      data: []
    };
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
    console.log('props in did mount in sj list component',this.props);
    const history=this.props.history;
    // console.log('History in  sj list component',history);
    const serviceJobStatus = this.props.history.location.state.serviceJobStatus;
    console.log('Servicejob Status sj list component :-',serviceJobStatus);
    const url = "http://localhost:3007/ServiceJobs";
    //serviceJobService.getAllServiceJobs(this.setStateFromApiResult);
    if (serviceJobStatus != '' && serviceJobStatus != undefined) {
      console.log('calling by status for status : -',serviceJobStatus);
      serviceJobService.getAllServicejobBySjStatus(serviceJobStatus).then((data) => {
        this.setStateFromApiResult(data);
      })
    }
    else {
      console.log('Searching all Service job: -',serviceJobStatus);
      serviceJobService.getAllServiceJobs().then((data) => {
        this.setStateFromApiResult(data);
      })
    }    
  }
  handleRowDoubleClick = row => {
    console.log("in handle double row click ");
  }

  removeItem = itemId => {
    this.setState({
      data: data.filter(item => item.id !== itemId)
    });
  }

  render() {
    const { data } = this.state;
    const history = this.props.history;
    console.log("data in reder",data);
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
        console.log(row.serviceJobNumber);
        const serviceJobNumber = row.serviceJobNumber;
        history.push({
          pathname: '/serviceJobDetail',
          state: { serviceJobNumber: serviceJobNumber }
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
                  data={data}
                  bordered={false}
                  striped
                  pagination={true}
                  options={options}>
                  <TableHeaderColumn
                    dataField='serviceJobNumber'
                    isKey
                    width="15%"
                    dataSort
                    filter={{ type: 'TextFilter' }}
                  >
                    Service Job Number
                  </TableHeaderColumn>
                  <TableHeaderColumn
                    dataField='serviceJobStatus'                   
                    width="15%"
                    dataSort
                    filter={{ type: 'TextFilter' }}
                  >
                    Service Job Status
                  </TableHeaderColumn>
                  <TableHeaderColumn
                    dataField='serviceJobType'
                    width="15%"
                    filter={{ type: 'TextFilter' }}
                    dataSort>
                    Service Job Type
                  </TableHeaderColumn>
                  <TableHeaderColumn
                    dataField='serviceJobDate'
                    filter={{ type: 'TextFilter' }}
                    width="15%"
                    filter={{ type: 'TextFilter' }}
                    dataSort>
                    Service Job Date
                  </TableHeaderColumn>
                  <TableHeaderColumn
                    dataField='customerFirstName'
                    filter={{ type: 'TextFilter' }}
                    width="15%"

                    dataSort>
                    First Name
                  </TableHeaderColumn>
                  <TableHeaderColumn
                    dataField='customerLastName'
                    filter={{ type: 'TextFilter' }}
                    width="15%">
                    Last Name
                  </TableHeaderColumn>
                  <TableHeaderColumn
                    dataField='scheduledServiceJobDate'
                    filter={{ type: 'TextFilter' }}
                    width="30%">
                    Scheduled Service Job Date
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
export default ServiceJobListTable