import React, { useState } from "react";
import { AiOutlineArrowUp } from "react-icons/ai";


const Sort = () => {

    
    

    return (
        <section className=" flex w-3/4 self-center items-end border-black border-2 h-6 ">
            <p className=" font-bold ">Sort by:</p>
            <button>Price <AiOutlineArrowUp className=" w-8 h-8 " /> </button>
        </section>
    )

};



export default Sort;
