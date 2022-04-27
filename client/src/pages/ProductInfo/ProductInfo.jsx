import { findItemInDbById } from "../../scripts/api";
import { renderItemDetailsPage } from "../../scripts/tools";
import { useState, useEffect } from "react";

const ProductInfo = (cartItems, setCartItems) => {
  const [selectedItem, setSelectedItem] = useState([]);

  const id = window.location.pathname.replace("/product/", "");

  useEffect(() => {
    findItemInDbById(id, setSelectedItem);
  });

  let rows = renderItemDetailsPage(selectedItem, cartItems, setCartItems);

  return (
    <main>
      <div className=" flex items-center p-5 bg-orange-400 justify-center">
        <h1 className=" font-medium">wale watching</h1>
      </div>
      <div className=" p-2  flex flex-col bg-lime-400 h-full w-full  ">
        <div className=" h-1/4">
          <img
            className=" w-full rounded-sm object-cover bg-amber-800"
            //src="https://images.unsplash.com/photo-1550524514-efb9046e0fec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=653&q=80"
            alt="Ballet dancer on a street"
          />
        </div>
        <div className="  flex flex-col justify-center items-center bg-amber-300">
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

      {rows}
    </main>
  );
};

export default ProductInfo;
