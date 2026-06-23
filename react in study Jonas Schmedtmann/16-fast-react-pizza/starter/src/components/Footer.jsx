import CartOverview from "../features/cart/CartOverview";

export default function Footer() {
  return (
    <footer className="p-4 text-xs uppercase sm:text-base sm:p-6 text-stone-200 bg-stone-800">
      <CartOverview />
    </footer>
  );
}
