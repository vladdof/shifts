import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
    padding: 8.5px 18px;
    background: rgba(5, 131, 115, 0.1);
    border-radius: 6px;
    border: none;
    font-size: inherit;
    font-family: inherit;
    font-weight: 500;
    letter-spacing: 0.02em;
    line-height: 121%;
    white-space: nowrap;
    color: #058373;
    appearance: none;
    transition: all 0.2s ease;

    &:hover {
        background: rgb(5 131 115 / 19%);
    }

    &:focus-visible {
        box-shadow: rgb(5 131 115 / 93%) 0 0 0 2px;
    }
`;

const Login = (props) => (
    // Sign out
    <Button>
        {props.name}
    </Button>
);

export default Login;
