import React from 'react';
import styled from 'styled-components';

import Menu from './Menu';
import Avatar from './Avatar';

const HeaderElement = styled.header`
    display: flex;
    flex-direction: column;
    background: #e8eaf0;

    @media (min-width: 1024px) {
        padding: 45px 0 0;
        min-height: 100vh;
        box-shadow: 0 0 16px rgba(0,0,0,.08);
        display: flex;
        flex-direction: column;
        width: var(--nav-bar-width);
        overflow: visible;
        position: fixed;
    }
`;

const links = [
    'My Dashboard',
    'People',
    'Operations',
    'Schedule Planning',
    'Administration',
    'Action Tracking'
];


const Header = () => (
    <HeaderElement>
        <div className="" as="button" onClick={() => alert('It works!')}>
            <span className="icon">
            </span>
        </div>

        <nav>
            <button className="menu__button" type="button" aria-expanded="false" aria-controls="nemu">
                <svg className="menu__icon" aria-hidden="true" width="32" height="32">
                    <use className="menu__icon-menu" href="images/sprite.svg#menu"></use>
                    <use className="menu__icon-close" href="images/sprite.svg#close"></use>
                </svg>
            </button>
            <Menu links={links} />
        </nav>

        <Avatar />
    </HeaderElement>
);

export default Header;
