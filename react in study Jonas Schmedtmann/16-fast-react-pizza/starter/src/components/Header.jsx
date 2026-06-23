import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import UserName from "../features/user/UserName";

export default function Header() {
  return (
    <header className="flex items-center justify-between p-2.5 md:p-4 uppercase bg-yellow-500 border-b border-stone-200 gap-4 flex-wrap">
      <Link to={"/"} className="block mb-2 tracking-widest sm:mb-0">
        Fast React Pizza Co.
      </Link>
      <SearchOrder />
      <UserName />
    </header>
  );
}
