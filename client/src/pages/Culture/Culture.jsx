import { getItemsFromDb } from "../../scripts/api";
import { useEffect } from "react";

const Culture = () => {

  useEffect(() => {
    getItemsFromDb("Culture")
  }, []);

  return <div>Culture</div>;
};

export default Culture;
