import LinkButton from "../../components/LinkButton";
import Button from "../../components/Button";
import CartItem from "./CartItem";

const fakeCart = [
  {
    pizzaId: 12,
    name: "Mediterranean",
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: "Vegetale",
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: "Spinach and Mushroom",
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

function Cart() {
  const cart = fakeCart;

  return (
    <div className="flex flex-col gap-y-8 md:gap-y-10">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <h2 className="font-semibold md:text-2xl">Your cart, KATE</h2>

      <ul className="grid divide-y gap-y-2 divide-stone-300">
        {cart.map((item) => (
          <CartItem key={item.pizzaId} item={item} />
        ))}
      </ul>

      <div className="flex items-center justify-between gap-4">
        <Button to="/order/new">Order pizzas</Button>
        <Button>Clear cart</Button>
      </div>
    </div>
  );
}

export default Cart;
