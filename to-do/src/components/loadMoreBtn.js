import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
    width: 100%;
    background-color: rgb(89, 64, 119);
    padding: 10px 0;
`;

const LoadMoreBtn = props => (
    <Button
        className="load-more-btn" 
        onClick={props.action.bind(this)}
    >
    Load More
    </Button>
);

export default LoadMoreBtn;