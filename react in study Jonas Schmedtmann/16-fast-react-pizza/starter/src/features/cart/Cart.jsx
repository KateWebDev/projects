import { useDispatch, useSelector } from "react-redux";
import { clearCart as clear, getCart } from "./cartSlice";
import { getUserName } from "../user/userSlice";

import LinkButton from "../../components/LinkButton";
import Button from "../../components/Button";
import CartItem from "./CartItem";
import EmptyCart from "./EmptyCart";

function Cart() {
  const userName = useSelector(getUserName);

  const cart = useSelector(getCart);

  const dispatch = useDispatch();

  function clearCart() {
    dispatch(clear());
  }

  return cart.length > 0 ? (
    <div className="flex flex-col gap-y-8 md:gap-y-10">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>
      <h2 className="font-semibold md:text-2xl">
        Your cart, <span className="font-semibold text-yellow-500 uppercase">{userName}</span>
      </h2>
      <ul className="grid divide-y gap-y-2 divide-stone-300">
        {cart.map((item) => (
          <CartItem key={item.pizzaId} item={item} />
        ))}
      </ul>
      <div className="flex items-center justify-between gap-4">
        <Button to="/order/new">Order pizzas</Button>
        <Button onClick={clearCart}>Clear cart</Button>
      </div>
    </div>
  ) : (
    <EmptyCart />
  );
}

export default Cart;
