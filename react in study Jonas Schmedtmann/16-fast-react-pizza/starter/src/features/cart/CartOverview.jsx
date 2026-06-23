import { Link } from "react-router-dom";

function CartOverview() {
  return (
    <div className="flex items-center justify-between gap-4">
      <p className="font-semibold text-stone-400">
        <span>23 pizzas</span> | <span>$23.45</span>
      </p>
      <Link to={"/cart"}>Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
