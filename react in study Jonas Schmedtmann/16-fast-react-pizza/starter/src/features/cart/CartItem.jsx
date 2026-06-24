import Button from "../../components/Button";
import { formatCurrency } from "../../utils/helpers";

function CartItem({ item }) {
  const { name, quantity, totalPrice } = item;

  function delToCart() {
    console.log(234);
  }
  return (
    <li className="py-2 sm:py-4 sm:flex sm:justify-between sm:items-center sm:gap-4">
      <p className="mb-2 sm:mb-4">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between gap-4 sm:gap-10">
        <p className="font-bold">{formatCurrency(totalPrice)}</p>
        <Button onClick={delToCart}>del</Button>
      </div>
    </li>
  );
}

export default CartItem;
