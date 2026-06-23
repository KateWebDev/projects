import { formatCurrency } from "../../utils/helpers";

function MenuItem({ pizza }) {
  const { name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  return (
    <li
      className={`grid grid-cols-[auto_1fr] items-center gap-x-4 md:gap-x-8 text-sm md:text-base py-2 md:py-4 ${soldOut && "opacity-40 grayscale"}`}
    >
      <img className="h-24 md:h-32" src={imageUrl} alt={name} />
      <div className="flex flex-col gap-y-2 md:gap-y-4">
        <p className="text-sm font-semibold uppercase md:text-xl">{name}</p>
        <p>{ingredients.join(", ")}</p>
        <div className="font-bold uppercase text-stone-500">
          {!soldOut ? <p>{formatCurrency(unitPrice)}</p> : <p>Sold out</p>}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
