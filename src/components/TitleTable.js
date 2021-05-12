import React from 'react';
import styled from 'styled-components';

const H1 = styled.h1`
    margin-bottom: 6px;
    font-weight: bold;
    font-size: 40px;
    line-height: 48px;

    span {
        color: #058373;
    }
`;

const Title = () => (
    <H1>All Shifts for <span>January 2021</span></H1>
);

export default Title;
