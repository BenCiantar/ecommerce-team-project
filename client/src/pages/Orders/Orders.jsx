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
<>
    <div className =" grid grid-cols-1 gap-5 p-5 md:grid-cols-3 lg:grid-cols-4 font-semibold text-stone-400">
            <h2>Order Number</h2>
            <h2>Order Date</h2>
            <h2>Total Amount</h2>
            <h2>Order Details</h2>
    </div>

    <hr />

    <div>
        {rows}
        <hr />
    </div>
    </>
  );
};

export default Orders
