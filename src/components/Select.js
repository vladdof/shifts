import React, { useState } from 'react';
import MultiSelect from 'react-multi-select-component';
import { createGlobalStyle } from 'styled-components';

import  { getMonthsYear } from '../service/FetchData';

const GlobalStyle = createGlobalStyle`
    .multi-select {
        width: 100%;

        @media (min-width: 768px) {
            max-width: 165px;
        }

        @media (max-width: 767.98px) {
            max-width: 136px;
        }
    }

    .rmsc {
        --rmsc-border: #dedfe2;
        --rmsc-radius: 6px;
        --rmsc-h: 42px;
    }
`;

const Select = () => {
    const options = getMonthsYear();

    const [selected, setSelected] = useState([]);

    return (
        <>
        <GlobalStyle />
        <MultiSelect
            options={options}
            value={selected}
            onChange={setSelected}
            labelledBy={'Select'}
            selectAllLabel={'All dates'}
            disableSearch
        />
        </>
    );
}

export default Select;
