import React from 'react';
import styled from 'styled-components';

const ContentElement = styled.main`
    grid-area: content;
    min-height: 100vh;
    display: grid;
    gap: 20px;
    position: relative;
    background-color: var(--post-bg);
    transition: var(--transition-all);
`;

const Content = () => (
    <ContentElement />
);

export default Content;
