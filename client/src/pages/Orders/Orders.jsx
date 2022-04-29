import { getOrdersFromDb } from "../../scripts/api";
import { useEffect, useState } from "react";
import { renderOrderItems } from "../../scripts/tools";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  
  useEffect(() => {
    getOrdersFromDb(setOrders);
  }, []);

  let rows = renderOrderItems(orders);

  return (
    <div> 
      {rows}
    </div>
  );
};

export default Orders
