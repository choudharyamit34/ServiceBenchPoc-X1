import React, { Component } from 'react';
import Table from './components/table/Table';

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
                <h1>Welcome to Service Bench</h1>
                <p>Below are the lastest Service Jobs</p>
                <Table
                    characterData={data}
                />             
                
            </div>
        );
    }
}

export default App;