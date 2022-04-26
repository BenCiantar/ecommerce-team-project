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
    <div className="bg-slate-500 grid grid-cols-1 gap-5 p-5 md:grid-cols-2 lg:grid-cols-3">
      {rows}
    </div>
  );
};
export default Adventures;
