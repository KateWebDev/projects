import { formatCurrency } from "../../utils/helpers";

function OrderItem({ item, isLoadingIngredients, ingredients }) {
  const { quantity, name, totalPrice } = item;

  return (
    <li className="py-2 sm:py-4 ">
      <div className="sm:flex sm:justify-between sm:items-center sm:gap-4">
        <div className="flex items-center justify-between w-full gap-4 sm:gap-10">
          <p>
            <span>{quantity}&times;</span> {name}
          </p>
          <p className="font-bold">{formatCurrency(totalPrice)}</p>
        </div>
      </div>
      {isLoadingIngredients ? "Loading..." : <p className="mt-2 text-xs italic sm:text-sm">{ingredients.join(", ")}</p>}
    </li>
  );
}

export default OrderItem;
