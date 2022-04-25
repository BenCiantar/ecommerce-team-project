import { getItemsFromDb } from "../../scripts/api";
import { useEffect, useState } from "react";
import { renderAllCategoryItems } from "../../scripts/tools";

const Adventures = ({ cartItems, setCartItems }) => {
  const [items, setItems] = useState([]);
  
  useEffect(() => {
    getItemsFromDb("Adventure", setItems);
  }, []);

  let rows = renderAllCategoryItems(items, cartItems, setCartItems);
  return (
    <div>
      {rows}
    </div>
  );
};
export default Adventures;
