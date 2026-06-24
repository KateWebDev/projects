import CreateUser from "../features/user/CreateUser";

function Home() {
  return (
    <div className="px-4 text-center sm:px-10 sm:my-10 md:my-14">
      <h1 className="mb-10 text-xl font-semibold md:text-3xl">
        The best pizza. 🍕
        <br />
        <span className="text-yellow-500">Straight out of the oven, straight to you.</span>
      </h1>
      <CreateUser />
    </div>
  );
}

export default Home;
