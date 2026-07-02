import { formatCurrency } from "../../utils/helpers";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../components/Button";
import { addProduct, delCountProduct, addCountProduct, delProduct, getQuantityProduct } from "../cart/cartSlice";

function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  const dispatch = useDispatch();
  const quantityProduct = useSelector(getQuantityProduct(id));

  function addCountProductInCart() {
    dispatch(addProduct({ pizzaId: id, name: name, quantity: 1, unitPrice: unitPrice, totalPrice: unitPrice }));
  }
  function delCountProductInCart() {
    dispatch(delCountProduct(id));
  }
  function incrementQuantity() {
    dispatch(addCountProduct(id));
  }
  function delProductInCart() {
    dispatch(delProduct(id));
  }

  return (
    <li
      className={`grid grid-cols-[auto_1fr] items-center gap-x-4 md:gap-x-8 text-sm md:text-base py-2 md:py-4 ${soldOut && "opacity-40 grayscale"}`}
    >
      <img className="h-24 md:h-32" src={imageUrl} alt={name} />
      <div className="flex flex-col gap-y-2 md:gap-y-4">
        <p className="text-sm font-semibold uppercase md:text-xl">{name}</p>
        <p>{ingredients.join(", ")}</p>
        <div className="flex flex-wrap items-center justify-between gap-4 font-bold uppercase text-stone-500">
          {!soldOut ? <p>{formatCurrency(unitPrice)}</p> : <p>Sold out</p>}
          <div className="flex items-center gap-4">
            <Button disabled={soldOut} onClick={quantityProduct > 0 ? incrementQuantity : addCountProductInCart}>
              {quantityProduct > 0 ? "+1" : "+"}
            </Button>
            {quantityProduct > 0 && <p>{quantityProduct}</p>}
            {quantityProduct > 0 && (
              <Button onClick={quantityProduct > 1 ? delCountProductInCart : delProductInCart}>-1</Button>
            )}
          </div>
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
