import LinkButton from "../../components/LinkButton";

function EmptyCart() {
  return (
    <div className="grid gap-y-10">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <p>Your cart is still empty. Start adding some pizzas :)</p>
    </div>
  );
}

export default EmptyCart;
