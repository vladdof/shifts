import React from 'react';
import styled from 'styled-components';

const ButtonElement = styled.a`
    display: inline-flex;
    border-radius: 50%;
    cursor: pointer;
    appearance: none;
    transition: all 0.2s ease;

    &:hover {
        outline: none;
        background: rgb(150 150 150 / 10%);
    }

    &:focus-visible {
        outline: none;
        box-shadow: #0c1427 0 0 0 1px;
    }
`;

const BackButton = () => (
    <ButtonElement href='#'>
        <svg width='24' height='24' fill='none' stroke='currentColor'>
            <path d='M15 18L9 12L15 6' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'></path>
        </svg>
    </ButtonElement>
);

export default BackButton;
