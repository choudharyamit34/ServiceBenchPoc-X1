import React, { Component } from 'react';
import Table from './components/serviceJob/serviceJobList/Table';
import ReactBootstrapTable from './components/serviceJob/serviceJobList/serviceJobListExtended';

class App extends Component {
    state = {
        data: []
    };
    
    componentDidMount() {
        const url = "http://localhost:3007/ServiceJobs";

        fetch(url)
            .then(result => result.json())
            .then(result => {
                this.setState({
                    data: result
                })
            });
    }

    render() {
        const { data } = this.state;

        return (
            <div className="container">
                <h2>Welcome to Service Bench</h2>
               
                {/* <Table
                    characterData={data}
                />  */}
                 <ReactBootstrapTable
                    data={data}                   
                />                       
                
            </div>
        );
    }
}

export default App;