import { getItemsFromDb } from "../../scripts/api";
import { useEffect, useState } from "react";
import { renderAllCategoryItems } from "../../scripts/tools";
import { Sort } from "../../components";


const Culture = () => {
  const [items, setItems] = useState([]);
  
  useEffect(() => {
    getItemsFromDb("Culture", setItems);
  }, []);

  let rows = renderAllCategoryItems(items);
  
  return (
    <div className="bg-slate-500  grid grid-cols-1 gap-5 p-5 md:grid-cols-2 lg:grid-cols-3">
      {rows}
    </div>
   );
};
export default Culture;
