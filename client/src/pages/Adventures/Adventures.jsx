import { getItemsFromDb } from "../../scripts/api";
import { useEffect } from "react";

const Adventures = () => {

  useEffect(() => {
    getItemsFromDb("Adventures")
  }, []);

  return <div>Adventures</div>;
};
export default Adventures;
