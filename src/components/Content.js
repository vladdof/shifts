import React from 'react';
import styled from 'styled-components';

import TitleTable from './TitleTable';
import Table from './Table';

const ContentElement = styled.main`
    display: grid;
    grid-area: content;
    gap: 20px;
    min-height: 100vh;
    padding: 120px 60px 10px;
    position: relative;
    text-align: left;
    background-color: var(--post-bg);
    transition: var(--transition-all);
`;

const Content = () => (
    <ContentElement>
        <TitleTable />
        <Table />
    </ContentElement>
);

export default Content;
