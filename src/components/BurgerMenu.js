import React from 'react';
import styled, { css } from 'styled-components';

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

export default class Burger extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            class: false
        }
        this.handleClick = this.handleClick.bind(this);
        this.setClass = this.setClass.bind(this);
    }

    handleClick = () => {
        this.setState({
            class: !this.state.class
        })
        this.setClass();
    }

    setClass = () => {
        if (this.state.class === true) {
            return 'clicked';
        }
    }

    render() {
        const { itemSize } = this.state;
        const { items } = this.props;

        return (
                <Button
                    type='button'
                    aria-expanded='false'
                    aria-controls='nemu'
                    as='button'
                    onClick={() => this.handleClick()}
                    className={this.setClass()}

                >
                    <span></span>
                </Button>
        );
    }
}
