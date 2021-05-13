import React from 'react';
import styled from 'styled-components';

import TitleTable from './TitleTable';
import Table from './Table';
import Select from './Select';

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

    @media (min-width: 768px) {
        padding: calc(50px + 12px) 30px 10px;
    }

    @media (min-width: 992px) {
        padding: 120px 60px 10px;
    }
`;

const SelectWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Content = () => (
    <ContentElement>
        <SelectWrapper>
            <TitleTable />
            <Select />
        </SelectWrapper>
        <Table />
    </ContentElement>
);

export default Content;
