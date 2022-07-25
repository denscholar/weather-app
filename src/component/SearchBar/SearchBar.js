import React, { useState } from 'react';
import './SearchBar.scss';


const SearchBar = ({getInput, search}) => {

    // const handleSearch = (e) =>{
    //     e.preventDefault()
    //     console.log(search);
    // }

    return (
        <>
            <form>
                <div className="example">
                    <input type="text" placeholder="Search.." onChange={getInput} />
                    <button type="submit"><i className="fa fa-search"></i></button>
                </div>
            </form>

        </>
    )
}

export default SearchBar
