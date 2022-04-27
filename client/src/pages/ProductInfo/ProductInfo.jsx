import { findItem } from "../../scripts/tools";
import { useState } from "react";
//import { useLocation } from "react-router";

const ProductInfo = () => {
  return (
    <main>
      <div className=" flex items-center p-5 bg-orange-400 justify-center">
        <h1 className=" font-medium">wale watching</h1>
      </div>
      <div className=" p-2 flex flex-col ">
        <div className=" ">
          <img
            className="w-full rounded-sm"
            src="https://images.unsplash.com/photo-1550524514-efb9046e0fec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=653&q=80"
            alt="Ballet dancer on a street"
          />
        </div>
        <div className=" flex-1   px-12">
          <h1 className=" font-medium">wale watching</h1>
          <p className=" my-5">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            nesciunt consequatur saepe illum exercitationem hic vel harum
            repellat provident ipsam, dolorum ab maxime expedita! Illo neque
            natus in fugiat enim?
          </p>
          <div>
            <span className=" font-light text-lg">$50</span>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductInfo;
