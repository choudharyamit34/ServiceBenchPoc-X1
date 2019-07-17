import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import serviceJobService from '../../../services/serviceJob.service';
import { Icon, Popup } from 'semantic-ui-react';
import '../../../Stylesheets/container.css';
import '../css/serviceJobs.css';

const data = [];
var tableCaptionCentred = {
  marginLeft:`10%`

}
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
    console.log('props in did mount in sj list component', this.props);
    const history = this.props.history;
    // console.log('History in  sj list component',history);
    let serviceJobStatus = '';
    let fromPath='';
    let spId='';
    if (this.props.history.location.state != undefined && this.props.history.location.state != '') {
      serviceJobStatus = this.props.history.location.state.serviceJobStatus;
      fromPath = this.props.history.location.state.fromPath;
      spId = this.props.history.location.state.spId;
      console.log('Servicejob Status sj list component :-', serviceJobStatus);
    }
    //serviceJobService.getAllServiceJobs(this.setStateFromApiResult);
    if (serviceJobStatus != undefined && serviceJobStatus != '' && fromPath=='') {
      console.log('calling by status for status : -', serviceJobStatus);
      serviceJobService.getAllServicejobBySjStatus(serviceJobStatus).then((data) => {
        this.setStateFromApiResult(data);
      })
    }
    else if(fromPath=="SP" && serviceJobStatus != ''&&  serviceJobStatus != undefined && spId!='')
    {
      console.log('calling by SP id for status : -', spId, serviceJobStatus);
      serviceJobService.getAllServicejobBySjStatusAndSPID(serviceJobStatus,spId).then((data) => {
        this.setStateFromApiResult(data);
      })
    }
    else {
      console.log('Searching all Service job: -', serviceJobStatus);
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
    console.log("data in reder", data);
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
      <div className="container-fluid container_position">
        <br />
        <div>  
          <td>      
          <Link to={this.props.history.goBack}>
           <Popup content="Back" trigger={<Icon name='arrow circle left' size='big' 
                        className="colorLogo" onClick={this.props.history.goBack}/>}/>
          </Link>
          <Link to="/addServiceJob">
            <Popup content="Add ServiceJob" trigger={<Icon name='plus square circle left' size='big' 
                        className="colorLogo" />}/>          
          </Link>
          </td>  
          <td className="h2_td_caption_jobs" >
            <h2  className='h2_caption_jobs'> Service Jobs</h2> 
          </td>             
        </div>
        <br />
        <div className="row">
          <div className="col-md-12">
            <div className="card">
             
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
                    width="13%"
                    dataSort
                    filter={{ type: 'TextFilter' }}
                  >
                    Service Job Number
                  </TableHeaderColumn>
                  <TableHeaderColumn
                    dataField='serviceJobStatus'
                    width="12%"
                    dataSort
                    filter={{ type: 'TextFilter' }}
                  >
                    Service Job Status
                  </TableHeaderColumn>
                  <TableHeaderColumn
                    dataField='serviceJobType'
                    width="11%"
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
                    dataField='serviceProviderId'                  
                    width="12%"
                    dataSort
                    filter={{ type: 'TextFilter' }}
                  >
                    Service Provider
                  </TableHeaderColumn>
                  <TableHeaderColumn
                    dataField='customerFirstName'
                    filter={{ type: 'TextFilter' }}
                    width="10%"

                    dataSort>
                    First Name
                  </TableHeaderColumn>
                  <TableHeaderColumn
                    dataField='customerLastName'
                    filter={{ type: 'TextFilter' }}
                    width="10%">
                    Last Name
                  </TableHeaderColumn>
                  <TableHeaderColumn
                    dataField='scheduledServiceJobDate'
                    filter={{ type: 'TextFilter' }}
                    width="30%">
                    Scheduled Service Job Date
                  </TableHeaderColumn>                  
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