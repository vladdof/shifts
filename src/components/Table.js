import React from 'react';
import styled from 'styled-components';

import icons from '../img/table-icons.svg';

const TableElement = styled.table`
    border-collapse: separate;
    border-spacing: 10px;
    text-align: left;
    max-width: 1096px;
`;

const TheadElement = styled.thead`
    color: #8697a8;
    font-weight: 500;
    font-size: 10px;
    line-height: 12px;
    letter-spacing: 0.03em;
    text-transform: uppercase;

    th {
        &:first-child {
            padding-left: 10px;
        }
    }
`;

const TbodyElement = styled.tbody`
    tr {
        border: 1px solid rgba(12, 20, 39, 0.05);
        box-sizing: border-box;
        box-shadow: 0px 2px 2px rgba(12, 20, 39, 0.1);
        border-radius: 20px;
    }

    td {
        padding: 20px 0;

        &:first-child {
            padding-left: 10px;
        }

        span {
            display: flex;
            align-items: center;
        }

        svg {
            margin-right: 8px;
        }
    }

`;

const headers = ['Date', 'Shift type', 'Period', 'Hours', 'Salary (gross)', 'Bonus (gross)'];
const rows = [
    ['January 06, 2020', 'Afternoon', '15:00 - 23:00', '8h', '$1,630', '30'],
    ['January 06, 2020', 'Afternoon', '15:00 - 23:00', '8h', '$1,630', '30'],
    ['January 06, 2020', 'Afternoon', '15:00 - 23:00', '8h', '$1,630', '30'],
    ['January 06, 2020', 'Afternoon', '15:00 - 23:00', '8h', '$1,630', '30'],
    ['January 06, 2020', 'Afternoon', '15:00 - 23:00', '8h', '$1,630', '30'],
    ['January 06, 2020', 'Afternoon', '15:00 - 23:00', '8h', '$1,630', '30'],
    ['January 06, 2020', 'Afternoon', '15:00 - 23:00', '8h', '$1,630', '30'],
    ['January 06, 2020', 'Afternoon', '15:00 - 23:00', '8h', '$1,630', '30'],
    ['January 06, 2020', 'Afternoon', '15:00 - 23:00', '8h', '$1,630', '30'],
    ['January 06, 2020', 'Afternoon', '15:00 - 23:00', '8h', '$1,630', '30'],
    ['January 06, 2020', 'Afternoon', '15:00 - 23:00', '8h', '$1,630', '30'],
    ['January 06, 2020', 'Afternoon', '15:00 - 23:00', '8h', '$1,630', '30'],
    ['January 06, 2020', 'Afternoon', '15:00 - 23:00', '8h', '$1,630', '30'],
    ['January 06, 2020', 'Afternoon', '15:00 - 23:00', '8h', '$1,630', '30'],
    ['January 06, 2020', 'Afternoon', '15:00 - 23:00', '8h', '$1,630', '30'],
    ['January 06, 2020', 'Afternoon', '15:00 - 23:00', '8h', '$1,630', '30'],
    ['January 06, 2020', 'Afternoon', '15:00 - 23:00', '8h', '$1,630', '30'],
    ['January 06, 2020', 'Afternoon', '15:00 - 23:00', '8h', '$1,630', '30'],
    ['January 06, 2020', 'Afternoon', '15:00 - 23:00', '8h', '$1,630', '30'],
    ['January 06, 2020', 'Afternoon', '15:00 - 23:00', '8h', '$1,630', '30'],
    ['January 06, 2020', 'Afternoon', '15:00 - 23:00', '8h', '$1,630', '30'],
    ['January 06, 2020', 'Afternoon', '15:00 - 23:00', '8h', '$1,630', '30'],
    ['January 06, 2020', 'Afternoon', '15:00 - 23:00', '8h', '$1,630', '30'],
    ['January 06, 2020', 'Afternoon', '15:00 - 23:00', '8h', '$1,630', '30'],
    ['January 06, 2020', 'Afternoon', '15:00 - 23:00', '8h', '$1,630', '30'],
    ['January 06, 2020', 'Afternoon', '15:00 - 23:00', '8h', '$1,630', '30'],
    ['January 06, 2020', 'Afternoon', '15:00 - 23:00', '8h', '$1,630', '30'],
    ['January 06, 2020', 'Afternoon', '15:00 - 23:00', '8h', '$1,630', '30'],
    ['January 06, 2020', 'Afternoon', '15:00 - 23:00', '8h', '$1,630', '30'],
    ['January 06, 2020', 'Afternoon', '15:00 - 23:00', '8h', '$1,630', '30'],
    ['January 06, 2020', 'Afternoon', '15:00 - 23:00', '8h', '$1,630', '30'],
    ['January 06, 2020', 'Afternoon', '15:00 - 23:00', '8h', '$1,630', '30'],
];

const setDataLabel = (index) => headers[index];

const Table = () => (
    <TableElement>
        <TheadElement>
            <tr>
                {
                    headers.map((header, index) => (
                        <th key={index}>{header}</th>
                    ))
                }
            </tr>
        </TheadElement>
        <TbodyElement>
            {rows.map((row, index_row) => (
                <tr key={index_row}>
                    {row.map((cell, index_cell) =>
                        <td key={index_cell} data-label={setDataLabel(index_cell)}>
                            <span>
                                {
                                    (index_cell === 0 &&
                                        <svg width='20' height='20'>
                                            <use xlinkHref={`${icons}#u_user-check`}></use>
                                        </svg>
                                    )
                                }
                                {
                                    (index_cell === 2 &&
                                        <svg width='18' height='18'>
                                            <use xlinkHref={`${icons}#fi_clock`}></use>
                                        </svg>
                                    )
                                }
                                {cell}
                            </span>
                        </td>
                    )}
                </tr>
            ))}
        </TbodyElement>
    </TableElement>
);

export default Table;
