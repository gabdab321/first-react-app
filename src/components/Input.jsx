import React, {useState} from 'react';

const Input = () => {
    const [value, setValue] = useState("type to change me")

    return (
        <div>
            <h1>{value}</h1>

            <input
                onInput={event => setValue(event.target.value)}
                type="text"
            />
        </div>
    );
};

export default Input;