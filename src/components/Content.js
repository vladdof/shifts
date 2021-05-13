import React from 'react';
import styled from 'styled-components';

import TitleTable from './TitleTable';
import Table from './Table';
import Select from './Select';

const ContentElement = styled.main`
    display: grid;
    grid-area: content;
    min-height: 100vh;
    padding: 70px 15px 10px;
    position: relative;
    text-align: left;
    background-color: var(--post-bg);
    transition: var(--transition-all);

    @media (min-width: 768px) {
        gap: 20px;
        padding: 60px 30px 10px;
    }

    @media (min-width: 992px) {
        padding: 120px 60px 10px;
    }

    @media (max-width: 767.98px) {
        gap: 15px;
    }
`;

const SelectWrapper = styled.div`
    display: flex;

    @media (max-width: 767.98px) {
        flex-direction: column;
        align-items: flex-start;
    }

    @media (min-width: 768px) {
        max-width: var(--max-width);
        justify-content: space-between;
        align-items: center;
    }
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
