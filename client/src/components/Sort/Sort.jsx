import React from "react";
import { sortItems } from "../../scripts/tools"


const Sort = ({items, setItems}) => { 

    const handleChange = (e) => {
        const sortBy = e.target.value;
        const sortedItems = sortItems(items, sortBy);
        setItems(sortedItems);
    }

    return (
<div className=" flex w-full pt-6 pl-2 pr-2 md:pl-6 md:w-1/3 lg:pl-6 lg:w-1/4">
    <select name="sort-menu" id="sort-menu" className=" w-full h-8 bg-white text-black border border-slate-300 px-2" onChange={handleChange}>
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
