import React from 'react';
import styled, { css } from 'styled-components';

import Button from './Button';

const LoginButton = styled(Button)`
    padding: 8.5px 18px;
    background: rgba(5, 131, 115, 0.1);
    border-radius: 6px;
    line-height: 121%;
    color: #058373;

    &:hover {
        background: rgb(5 131 115 / 19%);
    }

    &:focus-visible {
        box-shadow: rgb(5 131 115 / 93%) 0 0 0 2px;
    }
`;

const Login = (props) => (
    // Sign out
    <LoginButton>
        {props.name}
    </LoginButton>
);

export default Login;
