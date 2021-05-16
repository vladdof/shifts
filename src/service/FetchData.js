const getHeadersTable = () => ['Date', 'Shift type', 'Period', 'Hours', 'Salary (gross)', 'Bonus (gross)'];

const getRowsTable = () => [
    ['January 06, 2021', 'Afternoon', '15:00 - 23:00', '8h', '$1,630', '30'],
    ['January 06, 2021', 'Afternoon', '15:00 - 23:00', '8h', '$1,630', '30'],
    ['January 06, 2021', 'Afternoon', '15:00 - 23:00', '8h', '$1,630', '30'],
    ['January 06, 2021', 'Afternoon', '15:00 - 23:00', '8h', '$1,630', '30'],
    ['January 06, 2021', 'Afternoon', '15:00 - 23:00', '8h', '$1,630', '30'],
    ['January 06, 2021', 'Afternoon', '15:00 - 23:00', '8h', '$1,630', '30'],
    ['January 06, 2021', 'Afternoon', '15:00 - 23:00', '8h', '$1,630', '30'],
    ['January 06, 2021', 'Afternoon', '15:00 - 23:00', '8h', '$1,630', '30'],
    ['January 06, 2021', 'Afternoon', '15:00 - 23:00', '8h', '$1,630', '30'],
    ['January 06, 2021', 'Afternoon', '15:00 - 23:00', '8h', '$1,630', '30'],
    ['January 06, 2021', 'Afternoon', '15:00 - 23:00', '8h', '$1,630', '30'],
    ['January 06, 2021', 'Afternoon', '15:00 - 23:00', '8h', '$1,630', '30'],
    ['January 06, 2021', 'Afternoon', '15:00 - 23:00', '8h', '$1,630', '30'],
    ['January 06, 2021', 'Afternoon', '15:00 - 23:00', '8h', '$1,630', '30'],
    ['January 06, 2021', 'Afternoon', '15:00 - 23:00', '8h', '$1,630', '30'],
    ['January 06, 2021', 'Afternoon', '15:00 - 23:00', '8h', '$1,630', '30'],
    ['January 06, 2021', 'Afternoon', '15:00 - 23:00', '8h', '$1,630', '30'],
    ['January 06, 2021', 'Afternoon', '15:00 - 23:00', '8h', '$1,630', '30'],
    ['January 06, 2021', 'Afternoon', '15:00 - 23:00', '8h', '$1,630', '30'],
    ['January 06, 2021', 'Afternoon', '15:00 - 23:00', '8h', '$1,630', '30'],
    ['January 06, 2021', 'Afternoon', '15:00 - 23:00', '8h', '$1,630', '30'],
    ['January 06, 2021', 'Afternoon', '15:00 - 23:00', '8h', '$1,630', '30'],
    ['January 06, 2021', 'Afternoon', '15:00 - 23:00', '8h', '$1,630', '30'],
    ['January 06, 2021', 'Afternoon', '15:00 - 23:00', '8h', '$1,630', '30'],
    ['January 06, 2021', 'Afternoon', '15:00 - 23:00', '8h', '$1,630', '30'],
    ['January 06, 2021', 'Afternoon', '15:00 - 23:00', '8h', '$1,630', '30'],
    ['January 06, 2021', 'Afternoon', '15:00 - 23:00', '8h', '$1,630', '30'],
    ['January 06, 2021', 'Afternoon', '15:00 - 23:00', '8h', '$1,630', '30'],
    ['January 06, 2021', 'Afternoon', '15:00 - 23:00', '8h', '$1,630', '30'],
    ['January 06, 2021', 'Afternoon', '15:00 - 23:00', '8h', '$1,630', '30'],
    ['January 06, 2021', 'Afternoon', '15:00 - 23:00', '8h', '$1,630', '30'],
    ['January 06, 2021', 'Afternoon', '15:00 - 23:00', '8h', '$1,630', '30'],
];

const getDate = () => {
    return new Date().getFullYear();
};

const getMonthsYear = () => [
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

const getLinksMenu = () => [
    'My Dashboard',
    'People',
    'Operations',
    'Schedule Planning',
    'Administration',
    'Action Tracking'
];

export { getMonthsYear, getHeadersTable, getRowsTable, getLinksMenu };
