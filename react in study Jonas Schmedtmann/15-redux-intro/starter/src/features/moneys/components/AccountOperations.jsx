import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCredit, deposit, payCredit, withdraw } from "../moneysSlice";

function AccountOperations() {
  const [depositAmount, setDepositAmount] = useState("");
  const [withdrawalAmount, setWithdrawalAmount] = useState("");
  const [loanAmount, setLoanAmount] = useState("");
  const [loanPurpose, setLoanPurpose] = useState("");
  const [payAmount, setPayAmount] = useState("");
  const [currency, setCurrency] = useState("USD");

  const dispatch = useDispatch();
  const { credit, purposeCredit } = useSelector((store) => store.money);

  function handleDeposit() {
    if (deposit <= 0) return;
    dispatch(deposit(depositAmount, currency));
    setDepositAmount("");
    setCurrency("USD");
  }

  function handleWithdrawal() {
    if (withdrawalAmount <= 0) return;
    dispatch(withdraw(withdrawalAmount));
    setWithdrawalAmount("");
  }

  function handleRequestLoan() {
    if (loanAmount <= 0 || !loanPurpose) return;
    dispatch(addCredit(loanAmount, loanPurpose));
    setLoanAmount("");
    setLoanPurpose("");
  }

  function handlePayLoan() {
    if (payAmount <= 0) return;
    dispatch(payCredit(payAmount));
    setPayAmount("");
  }

  return (
    <div>
      <h2>Your account operations</h2>
      <div className="inputs">
        <div>
          <label>Deposit</label>
          <input type="number" value={depositAmount} onChange={(e) => setDepositAmount(+e.target.value)} />
          <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
            <option value="USD">US Dollar</option>
            <option value="EUR">Euro</option>
            <option value="GBP">British Pound</option>
          </select>

          <button onClick={handleDeposit}>Deposit {depositAmount}</button>
        </div>

        <div>
          <label>Withdraw</label>
          <input type="number" value={withdrawalAmount} onChange={(e) => setWithdrawalAmount(+e.target.value)} />
          <button onClick={handleWithdrawal}>Withdraw {withdrawalAmount}</button>
        </div>

        <div>
          <label>Request loan</label>
          <input
            type="number"
            value={loanAmount}
            onChange={(e) => setLoanAmount(+e.target.value)}
            placeholder="Loan amount"
          />
          <input value={loanPurpose} onChange={(e) => setLoanPurpose(e.target.value)} placeholder="Loan purpose" />
          <button onClick={handleRequestLoan}>Request loan</button>
        </div>
        {credit > 0 && (
          <div>
            <label>
              Pay back {credit} ({purposeCredit})
            </label>
            <input type="number" value={payAmount} onChange={(e) => setPayAmount(+e.target.value)} />
            <button onClick={handlePayLoan}>Pay loan {payAmount}</button>
          </div>
        )}
        <div></div>
      </div>
    </div>
  );
}

export default AccountOperations;
