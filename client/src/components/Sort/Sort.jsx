import React, { useState } from "react";
import { AiOutlineArrowUp } from "react-icons/ai";
import { sortItems } from "../../scripts/tools"


const Sort = ({items, setItems}) => { 

    const handleChange = (e) => {
        const sortBy = e.target.value;
        const sortedItems = sortItems(items, sortBy);
        setItems(sortedItems);
    }

    return (
<div className=" flex items-center m-2 ">
    <select name="sort-menu" id="sort-menu" className=" h-8 px-2 rounded-sm bg-black text-white " onChange={handleChange}>
        <option value="default" defaultValue>Sort items</option>
        <option value="Price-high-low">Price - High to low</option>
        <option value="Price-low-high">Price - Low to high</option>
        <option value="Alpha-a-z">Alphabetical - a to z</option>
        <option value="Alpha-z-a">Alphabetical - z to a</option>
    </select>
</div>


    )  

};



export default Sort;
