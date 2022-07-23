import React from 'react';
import MyInput from "../UI/Input/MyInput";
import MySelect from "../UI/select/MySelect";

const PostFilter = ({filter, setFilter, options}) => {
    return (
        <div>
            <MyInput
                placeholder="search..."
                type="text"
                value={filter.query}
                onChange={e => setFilter({...filter, query: e.target.value})}
            />
            <MySelect
                value={filter.sort}
                onChange={e => setFilter({...filter, sort: e})}
                options={options}
                defaultValue={"Sort By:"}
            />
        </div>
    );
};

export default PostFilter;