import React, { Component } from 'react';

const TableHeader = () => { 
    return (
        <thead>
            <tr>
                <th>Service Job Number</th>
                <th>Service Job Date</th>
                <th>Service Job Type</th>
            </tr>
        </thead>
    );
}

const TableBody = props => { 
    const rows = props.characterData.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.serviceJobNumber}</td>
                <td>{row.serviceJobDate}</td>
                <td>{row.serviceJobType}</td>
                
            </tr>
        );
    });

    return <tbody>{rows}</tbody>;
}

class Table extends Component {
    render() {
        const { characterData } = this.props;

        return (
            <table>
                <TableHeader />
                <TableBody characterData={characterData}  />
            </table>
        );
    }
}

export default Table;