import { getItemsFromDb } from "../../scripts/api";
import { useEffect, useState } from "react";
import { renderAllCategoryItems } from "../../scripts/tools";

const Culture = () => {
  const [items, setItems] = useState([]);
  
  useEffect(() => {
   rows = getItemsFromDb("Culture", setItems);
  }, []);

  let rows = renderAllCategoryItems(items);
  
  return (
    <div>
      {rows}
    </div>
   );
};
export default Culture;
