import React, { useState } from 'react';
import styled from 'styled-components';

const Button = styled.button`
    margin-right: 100%;
    width: 50px;
    height: 50px;
    background: none;
    border: 0;
    cursor: pointer;
    z-index: 101;
    position: relative;

    @media (min-width: 992px) {
        display: none;
    }

    span {
        display: block;
        width: 20px;
        height: 3px;
        margin: auto;
        background-color: #fff;
        border-radius: 1px;
        outline: 1px solid transparent;
        position: relative;
        user-select: none;
        transition-property: background-color, transform;
        transition-duration: .2s;

        &:before,
        &:after {
            content: '';
            width: 100%;
            height: 100%;
            background-color: #fff;
            border-radius: 1px;
            position: absolute;
            left: 0;
            z-index: 1;
            transition-property: background-color, transform;
            transition-duration: .2s;
        }

        &:before {
            top: -8px;
        }

        &:after {
            bottom: -8px;
        }

        ${props => props.className !== 'clicked' ? 'clicked' : ''} {
            background-color: transparent;
        }
    }

    ${props => props.className !== 'clicked' ? 'clicked' : ''} span:before {
        transform: translateY(8px) rotate(45deg);
    }

    ${props => props.className !== 'clicked' ? 'clicked' : ''} span:after {
        transform: translateY(-8px) rotate(-45deg);
    }
`;

const Burger = (props) => {
    const [className, toggleClass] = useState(false);

    const handleClick = () => {
        toggleClass(!className);
        props.toggleMenu();
    }

    const setClass = () => {
        if (className === true) {
            return 'clicked';
        }
    }

    return (
        <Button
            type='button'
            aria-expanded={props.openMenu}
            aria-controls='nemu'
            as='button'
            onClick={() => handleClick()}
            className={setClass()}
        >
            <span></span>
        </Button>
    );
};

export default Burger;
