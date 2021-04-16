import React from 'react';
import styled from 'styled-components';

const PurpleButton = styled.button`
    width: 100%;
    background-color: rgb(89, 64, 119);
    padding: 10px 0;
    
    &:hover {
        background-color: rgb(109, 84, 140);
    }
`;

const LoadMoreBtn = props => (
    <PurpleButton onClick={props.action.bind(this)}>
        Load More
    </PurpleButton>
);

export default LoadMoreBtn;