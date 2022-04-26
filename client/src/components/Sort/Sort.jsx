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
       /* <section className=" flex w-3/4 self-center items-end border-black border-2 h-8 ">
            <p className=" font-bold ">Sort by:</p>
            <button className=" flex border-black border-2 mx-1 ">Price <AiOutlineArrowUp className=" w-5 h-5 "  /> </button>
        </section>
        */

<div>
    <select name="sort-menu" id="sort-menu" onChange={handleChange}>
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
