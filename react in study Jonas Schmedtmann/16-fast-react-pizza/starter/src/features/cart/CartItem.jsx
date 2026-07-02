import { useDispatch } from "react-redux";
import Button from "../../components/Button";
import { formatCurrency } from "../../utils/helpers";
import { addCountProduct, delCountProduct, delProduct } from "./cartSlice";

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;
  const dispatch = useDispatch();

  function incrementProduct() {
    dispatch(addCountProduct(pizzaId));
  }
  function decrementProduct() {
    dispatch(delCountProduct(pizzaId));
  }
  function delProductIcnCart() {
    dispatch(delProduct(pizzaId));
  }
  return (
    <li className="py-2 sm:py-4 sm:flex sm:justify-between sm:items-center sm:gap-4">
      <p className="mb-2 sm:mb-4">
        {quantity}&times; {name}
      </p>
      <div className="flex flex-wrap items-center justify-end gap-4 sm:gap-6">
        <p className="mr-auto font-bold">{formatCurrency(totalPrice)}</p>
        <div className="flex items-center gap-2">
          <Button onClick={incrementProduct}>+</Button>
          {quantity > 0 && (
            <p className="flex items-center justify-center w-8 h-8 p-2 font-semibold leading-none bg-yellow-200 rounded-full sm:w-10 sm:h-10">
              {quantity}
            </p>
          )}
          <Button onClick={quantity > 1 ? decrementProduct : delProductIcnCart}>-</Button>
          <Button onClick={delProductIcnCart}>del</Button>
        </div>
      </div>
    </li>
  );
}

export default CartItem;
