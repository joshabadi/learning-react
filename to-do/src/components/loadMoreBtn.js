import React from 'react';

const LoadMoreBtn = props => (
    <button 
        className="load-more-btn" 
        onClick={props.action.bind(this)}
    >
    Load More
    </button>
);

export default LoadMoreBtn;