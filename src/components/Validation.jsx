import React from 'react';

function Validation(props) {
  let valMessage = "Text long enough";
  if(props.inputLength <= 5){
    valMessage = "Text too short";
  }
  return (<div>{valMessage}</div>)
}

export default Validation
