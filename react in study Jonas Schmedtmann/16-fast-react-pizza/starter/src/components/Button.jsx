import { Link } from "react-router-dom";

export default function Button({ children, disabled = false, to, type = "button" }) {
  const classes =
    "px-4 py-2 text-xs font-semibold tracking-wider uppercase bg-yellow-500 rounded-md outline-none cursor-pointer sm:text-base text-stone-800 hover:bg-yellow-400 disabled:bg-stone-200 disabled:text-stone-400 disabled:pointer-events-none focus:bg-yellow-400 focus-element";
  if (to) {
    return (
      <Link className={classes} to={to}>
        {children}
      </Link>
    );
  }
  return (
    <button className={classes} disabled={disabled} type={type}>
      {children}
    </button>
  );
}
