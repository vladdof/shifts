import React from 'react';
import styled from 'styled-components';

import sprite from '../img/menu-icons.svg'

const MenuList = styled.ul`
    display: grid;

    li {
        display: flex;
        align-items: center;
        position: relative;
        cursor: pointer;

        &:before {
            content: '';
            width: 199px;
            position: absolute;
            z-index: 0;
            left: -12px;
            top: -12px;
            bottom: -12px;
            background: #fff;
            border-radius: 8px;
            transition: 0.3s linear;
            --size: 0;
            clip-path: circle(var(--size) at left center);
        }

        &:hover:before {
            --size: 300px;
        }

        * {
            z-index: 1;
        }
    }

    svg {
        margin-right: 16px;
    }

    @media (min-width: 992.08px) {
        row-gap: 30px;
        padding-left: 36px;
    }

    @media (max-width: 992px) {
        position: fixed;
        right: auto;
        top: 56px;
        row-gap: 25px;
        align-content: baseline;
        justify-content: flex-start;
        max-width: 300px;
        width: 100%;
        height: 100%;
        margin: 0;
        padding-left: 30px;
        padding-top: 117px;
        background-color: #fff;
        box-shadow: 0 0 16px rgb(0 0 0 / 8%);
        left: ${props => !props.openMenu ? '-300px' : '0'};
        visibility: ${props => !props.openMenu ? 'hidden' : 'visible'};
        transition: all .3s ease;
        z-index: 100;
    }

    @media (max-width: 568px) {
        max-width: 100%;
    }
`;

const icon_names = {
    0: '#u_create-dashboard',
    1: '#u_users-alt',
    2: '#u_chart',
    3: '#u_clipboard-alt',
    4: '#u_wrench',
    5: '#u_file-search-alt'

};

const Menu = (props) => (
    <MenuList openMenu={props.openMenu} id='menu'>
        {
            props.links.map((item, index) => (
                <li key={index}>
                    <svg width='20' height='20'>
                        <use key={index} xlinkHref={`${sprite}${icon_names[index]}`}></use>
                    </svg>
                    <a href='#'>{item}</a>
                </li>
            ))
        }
    </MenuList>
);

export default Menu;
