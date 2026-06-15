import { useSelector } from "react-redux";

import CreateCustomer from "./features/users/components/CreateCustomer";
import Customer from "./features/users/components/Customer";
import AccountOperations from "./features/moneys/components/AccountOperations";
import BalanceDisplay from "./features/moneys/components/BalanceDisplay";

function App() {
  const { fullName } = useSelector((store) => store.user);
  return (
    <div>
      <h1>🏦 The React-Redux Bank ⚛️</h1>
      {!fullName ? (
        <CreateCustomer />
      ) : (
        <>
          <Customer />
          <AccountOperations />
          <BalanceDisplay />
        </>
      )}
    </div>
  );
}

export default App;
