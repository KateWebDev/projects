import { Link, useNavigate } from "react-router-dom";

export default function LinkButton({ to, children }) {
  const navigate = useNavigate();
  const classes = "text-sm text-blue-500 trans hover:text-blue-700";

  if (to === "-1") {
    return (
      <button className={classes} onClick={() => navigate(-1)}>
        {children}
      </button>
    );
  }

  return (
    <Link className={classes} to={to}>
      {children}
    </Link>
  );
}
