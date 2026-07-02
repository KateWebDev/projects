import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import UserName from "../features/user/UserName";

export default function Header() {
  return (
    <header className="flex flex-wrap items-center justify-center gap-4 p-8 uppercase bg-yellow-500 border-b sm:justify-between md:p-4 border-stone-200">
      <Link to={"/"} className="block mb-2 tracking-widest sm:mb-0">
        Fast React Pizza Co.
      </Link>
      <SearchOrder />
      <UserName />
    </header>
  );
}
