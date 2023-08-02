import React from 'react';


function SearchBar(props) {
    const className = props.className;
    const type = props.type;
    const placeholder = props.placeholder;
        return (
            <input className = {className} type = {type} placeholder={placeholder}></input>
        );
}

export default SearchBar;
