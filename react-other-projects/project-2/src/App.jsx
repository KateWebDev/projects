import React, { useState, useEffect } from "react";
import "./index.css";

//Rus

//БЕЗ ПОДСКАЗОК:
//Создайте интерфейс для конвертации валют с загрузкой данных валют из API Frankfurter в state, динамическим отображением options в select, обработкой выбранных валют, ввода суммы, расчётом конвертации через асинхронную функцию с try/catch/finally, отображением результата в UI, проверкой, что сумма больше 0, и состояниями для загрузки и ошибок.

//C ПОДСКАЗКАМИ:

// 6 - Добавьте в обе функции блоки try/catch/finally. Создайте state для loading (true/false) и error ("Сообщение ошибки").
// 7 - Внедрите логику отображения загрузки и ошибок в интерфейсе.
// 8 - Добавьте проверку, чтобы amount был больше 0.

//https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD

const API_URL = "https://api.frankfurter.app";

function App() {
  const [currenci, setCurrenci] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");
  const [total, setTotal] = useState(1);

  // получение валют
  useEffect(() => {
    async function converterCurrencies() {
      try {
        const responce = await fetch(`${API_URL}/currencies`);
        const data = await responce.json();
        const keys = Object.keys(data);
        setCurrenci(keys);
        setError(null);
      } catch (error) {
        setError(error);
      }
    }
    converterCurrencies();
  }, []);

  // конвертация
  async function converter() {
    setLoading(true);
    try {
      if (amount > 0) {
        const responce = await fetch(`${API_URL}/latest?amount=${amount}&from=${fromCurrency}&to=${toCurrency}`);
        const data = await responce.json();
        setTotal(data);
        setError(null);
      } else {
        throw new Error("Число должно быть больше 0");
      }
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="app">
      <h1>Currency Exchange Calculator</h1>

      <div className="converter-container">
        {error && <p className="error">{error.message}</p>}
        <div className="input-group">
          <input
            type="number"
            placeholder="Amount"
            className="input-field"
            value={amount}
            onChange={(evt) => setAmount(evt.target.value)}
          />
          <select className="dropdown" value={fromCurrency} onChange={(evt) => setFromCurrency(evt.target.value)}>
            {currenci.map((item) => (
              <option value={item} key={item}>
                {item}
              </option>
            ))}
          </select>
          <span className="arrow">→</span>
          <select className="dropdown" value={toCurrency} onChange={(evt) => setToCurrency(evt.target.value)}>
            {currenci.map((item) => (
              <option value={item} key={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
        <button className="convert-button" onClick={converter}>
          Convert
        </button>
        {loading && <p className="loading">Converting...</p>}
        {!loading && !error && total?.rates?.[toCurrency] && (
          <p className="result">
            {`${total?.amount} ${fromCurrency} = ${fromCurrency !== toCurrency ? total?.rates?.[toCurrency] : amount} ${toCurrency}`}{" "}
          </p>
        )}
      </div>
    </div>
  );
}

export default App;
