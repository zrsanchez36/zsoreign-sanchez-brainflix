import React from 'react';


function SearchBar(props) {
    const className = props.className;
    const type = props.type;
    const placeholder = props.placeholder;
        return (
            <div className='Search'>
                <div className='search__imputs'>
                    <input className = {className} type = {type} placeholder={placeholder}></input>
                    <div className='search__icon'></div>
                </div>
                {/* <div className='data__results'></div> */}
            </div>
        );
}

export default SearchBar;
