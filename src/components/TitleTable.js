import React from 'react';
import styled from 'styled-components';

const H1 = styled.h1`
    font-weight: bold;

    span {
        color: #058373;
    }

    @media (max-width: 767.98px) {
        max-width: 204px;
        margin-bottom: 15px;
        font-size: 24px;
        line-height: 29px;
    }

    @media (min-width: 768px) {
        margin-bottom: 6px;
        margin-right: 10px;
        font-size: 32px;
        line-height: 38px;
    }

    @media (min-width: 1100px) {
        font-size: 40px;
        line-height: 48px;
    }
`;

const Title = () => (
    <H1>All Shifts for <span>January 2021</span></H1>
);

export default Title;
