import { useState } from "react";
import "./index.css";

//Rus
//1 - Создайте состояние input, которое будет отображать результат вычислений в калькуляторе.
//2 - Создайте 2 функции для увеличения или уменьшения значения input на +1 или -1 и назначьте их на кнопки +1 / -1.
//3 - Создайте функцию, которая будет выполнять определенную операцию на калькуляторе в зависимости от нажатой кнопки. В результате работы этой функции должен получиться полностью рабочий калькулятор. Используйте эту функцию в обработчиках событий для всех кнопок.

//P.S. Если сложно продумать одну универсальную функцию, можете создать столько функций, сколько нужно. Не переживайте о чистоте кода.

//P.P.S. В JavaScript есть метод eval(), который преобразует любую строку в JavaScript-выражение.
//Пример: eval("console.log('Hello')") — выполнит этот код.
// Используйте этот метод для всех операций в калькуляторе.

function Calculator() {
  const [input, setInput] = useState("0");

  function addNum() {
    setInput((prev) => (+prev + 1).toString());
  }
  function delNum() {
    setInput((prev) => (+prev - 1).toString());
  }

  function symbol(evt) {
    if (evt.target.textContent === "C") {
      setInput("0");
      return;
    } else if (evt.target.textContent === "=") {
      setInput(eval(input));
      return;
    } else {
      setInput((prev) => (prev === "0" ? evt.target.textContent : prev + evt.target.textContent));
    }
  }

  return (
    <div className="calculator-container">
      <h1 className="calculator-title">UseState Calculator</h1>
      <div className="calculator">
        <div className="display">{input}</div>
        <div className="increment-buttons">
          <button className="increment" onClick={addNum}>
            +1
          </button>
          <button className="decrement" onClick={delNum}>
            -1
          </button>
        </div>
        <div className="buttons">
          <button
            onClick={(evt) => {
              symbol(evt);
            }}
          >
            1
          </button>
          <button
            onClick={(evt) => {
              symbol(evt);
            }}
          >
            2
          </button>
          <button
            onClick={(evt) => {
              symbol(evt);
            }}
          >
            3
          </button>
          <button
            onClick={(evt) => {
              symbol(evt);
            }}
            className="operator"
          >
            +
          </button>
          <button
            onClick={(evt) => {
              symbol(evt);
            }}
          >
            4
          </button>
          <button
            onClick={(evt) => {
              symbol(evt);
            }}
          >
            5
          </button>
          <button
            onClick={(evt) => {
              symbol(evt);
            }}
          >
            6
          </button>
          <button
            onClick={(evt) => {
              symbol(evt);
            }}
            className="operator"
          >
            -
          </button>
          <button
            onClick={(evt) => {
              symbol(evt);
            }}
          >
            7
          </button>
          <button
            onClick={(evt) => {
              symbol(evt);
            }}
          >
            8
          </button>
          <button
            onClick={(evt) => {
              symbol(evt);
            }}
          >
            9
          </button>
          <button
            onClick={() => {
              setInput((prev) => prev + "*");
            }}
            className="operator"
          >
            ×
          </button>
          <button
            onClick={(evt) => {
              symbol(evt);
            }}
          >
            0
          </button>
          <button
            onClick={(evt) => {
              symbol(evt);
            }}
          >
            ,
          </button>
          <button
            className="equals"
            onClick={(evt) => {
              symbol(evt);
            }}
          >
            =
          </button>
          <button
            className="operator"
            onClick={() => {
              setInput((prev) => prev + "/");
            }}
          >
            ÷
          </button>
          <button
            className="clear"
            onClick={(evt) => {
              symbol(evt);
            }}
          >
            C
          </button>
        </div>
      </div>
      <div className="technologies-used">
        <p>
          <strong>Technologies used:</strong> React, JSX, CSS Modules, JavaScript (useState, events handling)
        </p>
      </div>
    </div>
  );
}

export default Calculator;
