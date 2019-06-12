import React from 'react';


// usage
// 1. import import LabelField from './components/common/LabelField';
// 2. pass the props to this component as below
// let textFieldData = {
//     fieldName: 'ServiceJob Number',
//     fieldValue: 'SJH12345',
//   }
// 3. Use component as 
//return <LabelField textFieldData = {textFieldData} ></LabelField>

function LabelField(props) {
    return (
        <div>{props.textFieldData.fieldName} : 
        {props.textFieldData.fieldValue}</div>
      
    );
  }

  export default LabelField;