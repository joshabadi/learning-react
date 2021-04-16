import React from 'react';

const UsernameBtn = props => (
    <button 
        className="username-btn" 
        onClick={props.action.bind(this, props.additionalParams)}
    >
        {props.additionalParams}
    </button>
);

export default UsernameBtn;