import React, { useState } from "react";

export default function Calculator() {
  const [숫자, 숫자변경] = useState(0);
  const [인풋숫자1, 인풋숫자변경1] = useState();
  const [인풋숫자2, 인풋숫자변경2] = useState();

  const check = (인풋1, 인풋2) => {
    if (인풋1 === "" || 인풋2 === "") {
      alert("값을 입력하세요!");
      return;
    }

    if (isNaN(인풋1) || isNaN(인풋2)) {
      alert("숫자를 입력하세요!");
      return;
    }
  };

  const onChangeNum1 = (e) => {
    인풋숫자변경1(e.target.value);
  };

  const onChangeNum2 = (e) => {
    인풋숫자변경2(e.target.value);
  };

  const onClickAdd = () => {
    check(인풋숫자1, 인풋숫자2);
    숫자변경(parseInt(인풋숫자1) + parseInt(인풋숫자2));
    // setResult(Number(num1) + parseInt(num2));
  }; // Number와 parseInt의 차이 -> parseInt:문자열로 된 부분에서 숫자(정수)만 뽑아서 변환, Number:문자열 전체가 숫자일때 소수점까지 숫자타입으로 가져옴

  const onClickMinus = () => {
    check(인풋숫자1, 인풋숫자2);
    숫자변경(parseInt(인풋숫자1) - parseInt(인풋숫자2));
  };

  const onClickMul = () => {
    check(인풋숫자1, 인풋숫자2);
    숫자변경(parseInt(인풋숫자1) * parseInt(인풋숫자2));
  };

  const onClickDiv = () => {
    check(인풋숫자1, 인풋숫자2);
    숫자변경(parseInt(parseInt(인풋숫자1)) / parseInt(parseInt(인풋숫자2)));
  };

  return (
    <div className="bg-red-100 min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold mb-4">Awesome한 계산기</h1>
      <div className="text-3xl font-black mb-4">{숫자}</div>
      <div>
        <input
          class="border-2 focus:outline-none focus:border-purple-400 rounded-lg px-4 py-2 text-xl"
          type="number"
          value={인풋숫자1}
          onChange={onChangeNum1}
        />
        <input
          class="border-2 focus:outline-none focus:border-purple-400 rounded-lg px-4 py-2 text-xl ml-4"
          type="text"
          value={인풋숫자2}
          onChange={onChangeNum2}
        />
      </div>
      <div className="mt-5">
        <button
          onClick={onClickAdd}
          className="border-2 px-2 py-1 rounded-lg border-red-500 text-red-500"
        >
          Add
        </button>
        <button
          onClick={onClickMinus}
          className="border-2 px-2 py-1 rounded-lg border-blue-500 text-blue-500 ml-4"
        >
          Subtract
        </button>
        <button
          onClick={onClickMul}
          className="border-2 px-2 py-1 rounded-lg border-yellow-500 text-yellow-500 ml-4"
        >
          Multiply
        </button>
        <button
          onClick={onClickDiv}
          className="border-2 px-2 py-1 rounded-lg border-green-500 text-green-500 ml-4"
        >
          Divide
        </button>
      </div>
    </div>
  );
}
