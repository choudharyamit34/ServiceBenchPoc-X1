import React, { Component } from 'react';

class SjDetail extends Component {    

    render() {
        const { characterData } = this.props;

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

export default SjDetail;