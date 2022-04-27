import { getItemsFromDb } from "../../scripts/api";
import { useEffect, useState } from "react";
import { renderAllCategoryItems } from "../../scripts/tools";
import { Sort } from "../../components";

const Adventures = ({ cartItems, setCartItems }) => {
  const [items, setItems] = useState([]);
  
  useEffect(() => {
    getItemsFromDb("Adventure", setItems);
  }, []);

  let rows = renderAllCategoryItems(items, cartItems, setCartItems);

  return (
    <div className="bg-background min-h-screen ">
      <div className=" w-11/12 self-center m-auto ">
          <Sort items={items} setItems={setItems} />
        <div className =" grid grid-cols-1 gap-5 p-5 md:grid-cols-3 lg:grid-cols-4 ">
          {rows}
        </div>
      </div>
    </div>
  );
};
export default Adventures;
