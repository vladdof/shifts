import React from 'react';
import styled from 'styled-components';

import icons from '../img/table-icons.svg';
import { getHeadersTable, getRowsTable } from '../service/FetchData';

const TableElement = styled.table`
    border-spacing: 10px;
    text-align: left;
    max-width: var(--max-width, 100%);
    width: 100%;

    @media (min-width: 768px) {
        border-collapse: separate;
    }
`;

const TheadElement = styled.thead`
    @media (min-width: 768px) {
        color: #8697a8;
        font-size: 10px;
        line-height: 12px;
        letter-spacing: 0.03em;
        text-transform: uppercase;

        th {
            font-weight: 500;

            &:first-child {
                padding-left: 10px;
            }
        }
    }

    @media (max-width: 768px) {
        width: 1px;
        height: 1px;
        padding: 0;
        position: absolute;
        overflow: hidden;
    }
`;

const TbodyElement = styled.tbody`
    tr {
        box-sizing: border-box;
        box-shadow: 0 0 1px rgba(12, 20, 39, 0.1), 0 2px 2px rgba(12, 20, 39, 0.1);
        border-radius: 20px;
        transition: box-shadow 0.2s ease;

        &:hover {
            box-shadow: 0px 2px 28px rgba(12, 20, 39, 0.10);
        }

        @media (max-width: 767.97px) {
            display: block;

            &:not(:last-child) {
                margin-bottom: 16px;
            }
        }
    }

    td {
        padding: 20px 0;

        @media (min-width: 768px) {
            &:first-child {
                padding-left: 10px;
            }

            span {
                display: flex;
                align-items: center;
            }

            svg {
                display: block;
                margin-right: 8px;
            }
        }

        @media (max-width: 767.97px) {
            display: block;
            padding: 7.5px 15px;
            text-align: right;

            &:first-child {
                padding-top: 15px;
            }

            &:last-child {
                padding-bottom: 15px;
            }

            &:before {
                content: attr(data-label);
                float: left;
                font-family: 'Inter', sans-serif;
                font-weight: 500;
                font-size: 10px;
                line-height: 18px;
                letter-spacing: 0.03em;
                text-transform: uppercase;
                color: #8697a8;
            }

            span {
                font-size: 14px;
                line-height: 17px;
            }

            svg {
                display: none;
            }
        }
    }

`;

const headers = getHeadersTable();
const rows = getRowsTable();

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
