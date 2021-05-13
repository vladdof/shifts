import React, { useState } from 'react';
import styled from 'styled-components';

const SelectElement = styled.select`
    cursor: pointer;
    display: inline-block;
    position: relative;
    width: 165px;
    height: 44px;
    padding: 11px 17px;
    border: 1px solid #dedfe2;
    box-sizing: border-box;
    border-radius: 6px
`;

const Select_ = () => {
    const options = [
        { label: 'January', value: 'january' },
        { label: 'February', value: 'february' },
        { label: 'March', value: 'march' },
        { label: 'April', value: 'april' },
        { label: 'May', value: 'may' },
        { label: 'June', value: 'june' },
        { label: 'July', value: 'july' },
        { label: 'August', value: 'august' },
        { label: 'September', value: 'september' },
        { label: 'October', value: 'october' },
        { label: 'November', value: 'november' },
        { label: 'December', value: 'december' }
    ];

    const [selected, setSelected] = useState([]);

    return (
        <SelectElement onChange={setSelected} labelledBy={'Select'}>
            {
                options.map((option, index) => (
                    <option key={index} value={option.value}>
                        {option.label}
                    </option>
                ))
            }
        </SelectElement>
    );
};

export default Select_;
