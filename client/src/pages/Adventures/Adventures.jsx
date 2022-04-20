import { getItemsFromDb } from "../../scripts/api";
import { useEffect } from "react";

const Adventures = () => {

  useEffect(() => {
    getItemsFromDb("Adventure")
  }, []);

  return <div>Adventures</div>;
};
export default Adventures;
