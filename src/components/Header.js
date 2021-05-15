import React, { useState } from 'react';
import styled from 'styled-components';

import Menu from './Menu';
import Burger from './BurgerMenu';
import Avatar from './Avatar';

const HeaderElement = styled.header`
    grid-area: menu;
    position: fixed;
    z-index: 100;

    @media (min-width: 992.08px) {
        min-height: 100vh;
        padding: 45px 0 0;
        display: flex;
        flex-direction: column;
        width: var(--nav-bar-width);
        background-color: #e8eaf0;
        box-shadow: 0 0 16px rgba(0,0,0,.08);
        overflow: visible;
    }

    @media (max-width: 992px) {
        width: 100%;
        padding: 3px 0;
        top: 0;
        left: 0;
        background-color: #1d1e22;
        overflow: hidden;
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

const Header = () => {
    const [openMenu, toggleMenu] = useState(false);

    return (
        <>
            <HeaderElement>
                <div as="button">
                    <span className="icon">
                    </span>
                </div>

                <nav>
                    <Burger openMenu={openMenu} toggleMenu={() => toggleMenu(!openMenu)} />
                    <Menu openMenu={openMenu} links={links} />
                </nav>

                <Avatar openMenu={openMenu} />
            </HeaderElement>
        </>
    );
};

export default Header;
