import { useLoaderData } from "react-router-dom";
import { calcMinutesLeft, formatCurrency, formatDate } from "../../utils/helpers";
import { getOrder } from "../../services/apiRestaurant";
import OrderItem from "./OrderItem";

function Order() {
  const order = useLoaderData();
  const { id, status, priority, priorityPrice, orderPrice, estimatedDelivery, cart } = order;
  const deliveryIn = calcMinutesLeft(estimatedDelivery);

  return (
    <div className="space-y-6 sm:space-y-8">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <h2 className="font-bold uppercase text-l sm:text-xl">Order #{id} status</h2>
        <div className="flex flex-wrap items-center gap-4">
          {/* {priority && <span>Priority</span>} */}
          <span className="px-3 py-1 text-sm font-semibold tracking-wide uppercase bg-red-500 rounded-lg sm:text-base text-red-50">
            Priority
          </span>
          <span className="px-3 py-1 text-sm font-semibold tracking-wide uppercase bg-green-500 rounded-lg sm:text-base text-green-50">
            {status} order
          </span>
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-between gap-4 p-5 bg-stone-200">
        <p>
          {deliveryIn >= 0 ? `Only ${calcMinutesLeft(estimatedDelivery)} minutes left 😃` : "Order should have arrived"}
        </p>
        <p className="text-xs text-stone-500">(Estimated delivery: {formatDate(estimatedDelivery)})</p>
      </div>

      <ul className="grid divide-y gap-y-2 divide-stone-300">
        {cart.map((item) => (
          <OrderItem key={item.id} item={item} />
        ))}
      </ul>
      <div className="p-5 bg-stone-200">
        <p>Price pizza: {formatCurrency(orderPrice)}</p>
        {priority && <p className="font-semibold text-red-500">Price priority: {formatCurrency(priorityPrice)}</p>}
        <p className="text-sm font-bold sm:text-lg">To pay on delivery: {formatCurrency(orderPrice + priorityPrice)}</p>
      </div>
    </div>
  );
}
export async function loader({ params }) {
  const order = getOrder(params.id);
  return order;
}

export default Order;
