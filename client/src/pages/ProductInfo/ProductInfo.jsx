import { findItemInDbById } from "../../scripts/api";
import { renderItemDetailsPage } from "../../scripts/tools";
import { useState, useEffect } from "react";

const ProductInfo = (cartItems, setCartItems) => {
  const [selectedItem, setSelectedItem] = useState([]);

  const id = window.location.pathname.replace("/product/", "")

  useEffect(() => {
    findItemInDbById(id, setSelectedItem);
  });


  let rows = renderItemDetailsPage(selectedItem, cartItems, setCartItems);
 
  return (
    <main>
      {rows}
    </main>
  );
};

export default ProductInfo;

