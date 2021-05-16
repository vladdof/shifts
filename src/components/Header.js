import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import Menu from './Menu';
import Burger from './BurgerMenu';
import Avatar from './Avatar';
import Login from './Login';
import { getLinksMenu } from '../service/FetchData';

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

const AvatarLoginWrapper = styled.div`
    display: flex;
    align-items: center;

    @media (max-width: 992px) {
        position: fixed;
        top: calc(56px + 30px);
        left: ${props => !props.openMenu ? '-300px' : '30px'};
        z-index: 100;
        transition: left .4s ease;
    }
`;

const links = getLinksMenu();

const Header = () => {
    const [openMenu, toggleMenu] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const resizeWindow = () => {
        setWindowWidth(window.innerWidth);
    };

    useEffect(() => {
        resizeWindow();
        window.addEventListener('resize', resizeWindow);
        return () => window.removeEventListener('resize', resizeWindow);
    }, []);

    const AvaLoginWrapper = () => {
        if (windowWidth < 992) {
            return (
                <AvatarLoginWrapper openMenu={openMenu}>
                    <Avatar />
                    <Login name='Sign out' />
                </AvatarLoginWrapper>
            )
        }

        return <Avatar />;
    };

    return (
        <>
            <HeaderElement>
                <nav>
                    <Burger openMenu={openMenu} toggleMenu={() => toggleMenu(!openMenu)} />
                    <Menu openMenu={openMenu} links={links} />
                </nav>
                <AvaLoginWrapper />
            </HeaderElement>
        </>
    );
};

export default Header;
