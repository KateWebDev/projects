import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { allCountProducts, allPriceProducts } from "./cartSlice";

function CartOverview() {
  const allQuantity = useSelector(allCountProducts);
  const allPrice = useSelector(allPriceProducts);

  if (!allQuantity) return;
  return (
    <div className="flex items-center justify-between gap-4">
      <p className="font-semibold text-stone-400">
        <span>{allQuantity} pizzas</span> | <span>${allPrice.toFixed(2)}</span>
      </p>
      <Link to={"/cart"}>Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
