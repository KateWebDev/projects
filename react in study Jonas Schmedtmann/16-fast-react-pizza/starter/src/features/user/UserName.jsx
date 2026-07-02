import { useSelector } from "react-redux";
import { getUserName } from "./userSlice";

export default function UserName() {
  const userName = useSelector(getUserName);

  if (!userName) return null;

  return <p className="text-sm font-semibold sm:order-3">{userName}</p>;
}
