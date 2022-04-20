import { getItemsFromDb } from "../../scripts/api";
import { useEffect, useState } from "react";
import { renderAllCategoryItems } from "../../scripts/tools";

const Adventures = () => {
  const [items, setItems] = useState([])
  
  useEffect(() => {
   rows = getItemsFromDb("Adventure", setItems)
   console.log(rows)
  }, []);

  let rows = renderAllCategoryItems(items)
  return <div>
    {rows}
  </div>;
};
export default Adventures;
