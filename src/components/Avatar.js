import React from 'react';
import styled from 'styled-components';

import avatar from '../img/avatar.png'

const Figure = styled.figure`
    display: grid;
    grid-template-columns: min-content 70px;
    align-content: center;
    justify-content: start;

    figcaption {
        align-self: center;
        text-align: left;
    }

    @media (min-width: 992.08px) {
        margin-left: 36px;
        margin-top: auto;
        margin-bottom: 42px;
    }

    @media (max-width: 992px) {
        margin-right: 30px;
    }
`;

const ImgWrap = styled.img`
    margin-right: 15px;
`;

const Avatar = () => (
    <Figure>
        <ImgWrap src={avatar} width='50' height='50' alt='Darlene Robertson' />
        <figcaption>Darlene Robertson</figcaption>
    </Figure>
);

export default Avatar;
