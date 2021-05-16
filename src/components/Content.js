import React from 'react';
import styled from 'styled-components';

import TitleTable from './TitleTable';
import Table from './Table';
import Select from './Select';
import Login from './Login';
import BackButton from './BackButton';

const ContentElement = styled.main`
    --padding-side: 15px;
    --padding-top: 70px;
    display: grid;
    grid-area: content;
    min-height: 100vh;
    padding: var(--padding-top) var(--padding-side) 10px;
    position: relative;
    text-align: left;
    background-color: var(--post-bg);
    transition: var(--transition-all);

    @media (min-width: 768px) {
        gap: 20px;
        --padding-top: 80px;
        --padding-side: 30px;
    }

    @media (min-width: 992px) {
        --padding-top: 44px;
    }

    @media (min-width: 1200px) {
        --padding-side: 60px;
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

const ButtonWrapper = styled.div`
    @media (min-width: 992.08px) {
        max-width: var(--max-width);
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 30px;
    }

    @media (max-width: 992px) {
        display: none;
    }
`;

const Content = () => (
    <ContentElement>
        <ButtonWrapper>
            <BackButton />
            <Login name='Sign out' />
        </ButtonWrapper>
        <SelectWrapper>
            <TitleTable />
            <Select />
        </SelectWrapper>
        <Table />
    </ContentElement>
);

export default Content;
