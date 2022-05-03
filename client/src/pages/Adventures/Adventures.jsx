import { getItemsFromDb } from "../../scripts/api";
import { useEffect, useState } from "react";
import { renderAllCategoryItems } from "../../scripts/tools";
import { Sort } from "../../components";

const Adventures = ({ cartItems, setCartItems, currentUser }) => {
  const [items, setItems] = useState([]);
  
  useEffect(() => {
    getItemsFromDb("Adventure", setItems);
  }, []);

  let rows = renderAllCategoryItems(items, cartItems, setCartItems, currentUser);

  return (
    <div className="bg-background min-h-screen ">
      <div className=" w-full">
          <Sort items={items} setItems={setItems} />
        <div className =" grid grid-cols-1 gap-5 p-2 md:grid-cols-3 md:p-5 lg:grid-cols-4 lg:p-5">
          {rows}
        </div>
      </div>
    </div>
  );
};
export default Adventures;
