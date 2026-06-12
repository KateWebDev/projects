import { useReducer } from "react";

function reducer(prevState, action) {
  switch (action.type) {
    case "openBankAccount":
      return { ...prevState, isOpenAccount: true, money: 500 };
    case "closeBankAccount":
      return { ...prevState, isOpenAccount: false };
    case "addMoney":
      return { ...prevState, money: prevState.money + Number(prevState.inputAddMoney), inputAddMoney: "" };
    case "delMoney":
      return { ...prevState, money: prevState.money - Number(prevState.inputDelMoney), inputDelMoney: "" };
    case "addCredit":
      return {
        ...prevState,
        credit: 5000,
        money: prevState.money + Number(prevState.inputAddCredit),
        inputAddCredit: "",
      };
    case "delCredit":
      return { ...prevState, credit: 0, money: prevState.money - prevState.credit };
    case "inputAddMoney":
      return { ...prevState, inputAddMoney: action.payload.evt.target.value };
    case "inputDelMoney":
      return { ...prevState, inputDelMoney: action.payload.evt.target.value };
    case "inputAddCredit":
      return { ...prevState, inputAddCredit: action.payload.evt.target.value };
    default:
      console.log("Такой команды не найдено");
  }
}

export default function App() {
  const initialState = {
    money: 0,
    credit: 0,
    isOpenAccount: false,
    inputAddMoney: "",
    inputDelMoney: "",
    inputAddCredit: "",
  };

  const [state, dispath] = useReducer(reducer, initialState);

  const { money, credit, isOpenAccount, inputAddMoney, inputDelMoney, inputAddCredit } = state;

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Банковский счет на useReducer</h2>
      <h3>Баланс = {money}</h3>
      <h3>Кредит = {credit}</h3>

      <form className="form" action="">
        <div className="form-item">
          <label htmlFor="inputDelMoney">Сколько снять?</label>
          <input
            disabled={!isOpenAccount}
            id="inputDelMoney"
            value={inputDelMoney}
            type="number"
            onChange={(evt) => dispath({ type: "inputDelMoney", payload: { evt: evt } })}
            placeholder="0"
          />
        </div>
        <div className="form-item">
          <label htmlFor="inputAddMoney">Сколько положить денег?</label>
          <input
            disabled={!isOpenAccount}
            id="inputAddMoney"
            value={inputAddMoney}
            type="number"
            onChange={(evt) => dispath({ type: "inputAddMoney", payload: { evt: evt } })}
            placeholder="0"
          />
        </div>
        <div className="form-item">
          <label htmlFor="inputAddCredit">Сумма кредита?</label>
          <input
            disabled={!isOpenAccount}
            id="inputAddCredit"
            value={inputAddCredit}
            type="number"
            onChange={(evt) => dispath({ type: "inputAddCredit", payload: { evt: evt } })}
            placeholder="0"
          />
        </div>
      </form>

      <div className="actions">
        <button className="btn btn-ui" disabled={isOpenAccount} onClick={() => dispath({ type: "openBankAccount" })}>
          Открыть счет
        </button>
        <button
          className="btn btn-ui"
          disabled={!isOpenAccount || inputAddMoney === ""}
          onClick={() => dispath({ type: "addMoney" })}
        >
          Добавить {inputAddMoney} рублей
        </button>
        <button
          className="btn btn-ui"
          disabled={!isOpenAccount || money < 50 || inputDelMoney === ""}
          onClick={() => dispath({ type: "delMoney" })}
        >
          Снять {inputDelMoney} рублей
        </button>
        <button
          className="btn btn-ui"
          disabled={!isOpenAccount || credit > 0 || inputAddCredit === ""}
          onClick={() => dispath({ type: "addCredit" })}
        >
          Взять кредит {inputAddCredit} рублей
        </button>
        <button
          className="btn btn-ui"
          disabled={!isOpenAccount || money < credit || credit === 0}
          onClick={() => dispath({ type: "delCredit" })}
        >
          Погасить весь кредит
        </button>
        <button
          className="btn btn-ui"
          disabled={!isOpenAccount || money > 0}
          onClick={() => dispath({ type: "closeBankAccount" })}
        >
          Закрыть счет
        </button>
      </div>
    </div>
  );
}
