import { useSelector } from "react-redux";
import { getUserName } from "../features/user/userSlice";
import CreateUser from "../features/user/CreateUser";
import LinkButton from "./LinkButton";

function Home() {
  const userName = useSelector(getUserName);

  return (
    <div className="px-4 text-center sm:px-10 sm:my-10 md:my-14">
      <h1 className="mb-10 text-xl font-semibold md:text-3xl">
        The best pizza. 🍕
        <br />
        <span className="text-yellow-500">Straight out of the oven, straight to you.</span>
      </h1>
      {userName ? (
        <div>
          <p className="font-semibold sm:text-xl">
            Hello, <span className="font-bold text-yellow-500 uppercase">{userName}</span>!
          </p>
          <p className="sm:text-lg">
            To place an order, go to the <LinkButton to="/menu">menu</LinkButton>
          </p>
        </div>
      ) : (
        <CreateUser />
      )}
    </div>
  );
}

export default Home;
