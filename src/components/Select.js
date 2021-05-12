import React, { useState } from 'react';
import MultiSelect from 'react-multi-select-component';

export default function Select() {
    const options = [
        { label: "Grapes 🍇", value: "grapes" },
        { label: "Mango 🥭", value: "mango" },
        { label: "Strawberry 🍓", value: "strawberry" }
    ];

    const [selected, setSelected] = useState([]);

    return (
        <div>
            <MultiSelect
                options={options}
                value={selected}
                onChange={setSelected}
                labelledBy={"Select"}
            />
        </div>
    );
}
