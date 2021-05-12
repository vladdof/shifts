import React from 'react';
import styled from 'styled-components';

import sprite from '../img/menu-icons.svg'

const MenuList = styled.ul`
    margin-left: 36px;
    display: grid;
    justify-content: flex-start;
    row-gap: 30px;

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
            transform: translateX(-1000px);
            transition: var(--transform);
        }

        &:hover:before {
            transform: translateX(0);
        }

        * {
            z-index: 1;
        }
    }

    svg {
        margin-right: 16px;
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
    <MenuList id='menu'>
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
