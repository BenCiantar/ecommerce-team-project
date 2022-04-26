import { getItemsFromDb } from "../../scripts/api";
import { useEffect, useState } from "react";
import { renderAllCategoryItems } from "../../scripts/tools";
import { Sort } from "../../components";


const Culture = ({ cartItems, setCartItems }) => {
  const [items, setItems] = useState([]);
  
  useEffect(() => {
    getItemsFromDb("Culture", setItems);
  }, []);

  let rows = renderAllCategoryItems(items, cartItems, setCartItems);
  
  return (
    <div>
      <Sort items={items} setItems={setItems} />
      {rows}
    </div>
   );
};
export default Culture;
