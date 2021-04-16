import React from 'react';

const BackBtn = props => (
    <button 
        className="back-btn" 
        onClick={props.action.bind(this, null)}
    >
    &larr;
    </button>
);

export default BackBtn;