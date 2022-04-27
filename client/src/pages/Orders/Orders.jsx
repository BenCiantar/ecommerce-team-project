import { getOrdersFromDb } from "../../scripts/api";
import { useEffect, useState } from "react";
import { renderOrderItems } from "../../scripts/tools";
import { Sort } from "../../components";

const Orders = ({ ordersItems }) => {
  const [orders, setOrders] = useState([]);
  
  useEffect(() => {
    getOrdersFromDb(setOrders);
  }, []);

  let rows = renderOrderItems();
  console.log(orders)

  return (
    <div> 
      <Sort orders={items} setOrders={setOrders} />
      {rows}
    </div>
  );
};

export default Orders