import React from 'react';
import classes from "./MySelect.module.css";

const MySelect = ({value, onChange, options, defaultValue}) => {
    return (
        <select
            value={value}
            onChange={event => onChange(event.target.value)}
        >
            <option value="" disabled>{defaultValue}</option>
            {options.map(option =>
                <option value={option.value} key={option.value}>{option.textContent}</option>)
            }
        </select>
    );
};

export default MySelect;