import React, { useState } from 'react';
import MultiSelect from 'react-multi-select-component';
import styled, { createGlobalStyle } from 'styled-components';

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
    const getDate = () => {
        return new Date().getFullYear();
    };

    const options = [
        { label: `January, ${getDate()}`, value: `january` },
        { label: `February, ${getDate()}`, value: `february` },
        { label: `March, ${getDate()}`, value: `march` },
        { label: `April, ${getDate()}`, value: `april` },
        { label: `May, ${getDate()}`, value: `may` },
        { label: `June, ${getDate()}`, value: `june` },
        { label: `July, ${getDate()}`, value: `july` },
        { label: `August, ${getDate()}`, value: `august` },
        { label: `September, ${getDate()}`, value: `september` },
        { label: `October, ${getDate()}`, value: `october` },
        { label: `November, ${getDate()}`, value: `november` },
        { label: `December, ${getDate()}`, value: `december` }
    ];

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
