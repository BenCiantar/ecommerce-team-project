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
    <div>
      {rows}
    </div>
   );
};
export default Culture;
