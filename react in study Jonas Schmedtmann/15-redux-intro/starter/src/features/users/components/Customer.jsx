import { useSelector } from "react-redux";

function Customer() {
  const { fullName } = useSelector((store) => store.user);

  return <h2>👋 Welcome, {fullName || "USER"}</h2>;
}

export default Customer;
