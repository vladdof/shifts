import React from 'react';
import styled from 'styled-components';

import Header from './Header';
import Content from './Content';

const MainElement = styled.div`
    margin: 0px auto;
    z-index: 1000;
    display: grid;
    grid-template-areas: 'menu content';
    grid-template-columns: var(--nav-bar-width) calc( 100vw - var(--nav-bar-width) );
    grid-template-rows: 100%;
`;

const Main = (props) => (
    <MainElement className={ props.className }>
        <Header />
        <Content />
    </MainElement>
);

export default Main;
