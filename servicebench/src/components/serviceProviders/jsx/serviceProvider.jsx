import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import { Icon, Popup } from 'semantic-ui-react';
import serviceProviderService from '../../../services/serviceProvider.service';

 class ServiceProvider extends Component {
    constructor() {
        super();
        this.setStateFromApiResult = this.setStateFromApiResult.bind(this);
        this.state = {
          data: []
        };
      }
    
    
      setStateFromApiResult = function (data1) {
        console.log("data from api call-ServiceProvider", data1);
        if (data1 != undefined) {
          this.setState({
            data: data1
          });
    
        }
      }
      componentDidMount() {
        console.log('props in did mount in Serviceproviders component', this.props);
        const history = this.props.history;            
          serviceProviderService.getServiceProviders().then((data) => {
            this.setStateFromApiResult(data);
          })
       
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
        console.log("data in reder-ServiceProvider", data);
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
            console.log(row.serviceProviderId);
            const serviceProviderId = row.serviceProviderId;
            history.push({
              pathname: '/spDashboard',
              state: { serviceProviderId: serviceProviderId }
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
              <Link to="/addServiceJob">
                <Popup content="Add ServiceJob" trigger={<Icon name='plus square circle left' size='big' 
                            className="colorLogo" />}/>          
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
                        dataField='serviceProviderId'                  
                        width="15%"
                        isKey
                        dataSort
                        filter={{ type: 'TextFilter' }}
                      >
                        Service Provider
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
                        dataField='city'
                        filter={{ type: 'TextFilter' }}
                        width="15%">
                    City
                      </TableHeaderColumn>
                      <TableHeaderColumn
                        dataField='state'
                        filter={{ type: 'TextFilter' }}
                        width="15%">
                       State
                      </TableHeaderColumn>
                      <TableHeaderColumn
                        dataField='postalCode'
                        filter={{ type: 'TextFilter' }}
                        width="15%">
                       Postal Code
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
export default ServiceProvider;
