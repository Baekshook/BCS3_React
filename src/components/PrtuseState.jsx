import React, { useState } from "react";

export default function PrtuseState() {
  const [count, setCount] = useState(0);

  const onClickAdd = () => {
    setCount(count + 1);
  };

  const onClickMinus = () => {
    if (count <= 0) {
      alert("0보다 작을 수 없습니다.");
      return;
    } // return을 해줘야 0 아래로 내려가도 실행되지 않음
    setCount((prev) => {
      return prev - 1;
    }); // 화살표 함수를 이용한 onClickAdd 함수와는 다른 방법
  };

  return (
    <div className=" bg-red-100 min-h-screen flex flex-col justify-center items-center">
      <div>{count}</div>
      <button
        className=" bg-green-300 w-12 h-12 rounded-full"
        onClick={onClickAdd}
      >
        +
      </button>
      <button
        className="mt-4 bg-green-300 w-12 h-12 rounded-full"
        onClick={onClickMinus}
      >
        -
      </button>
    </div>
  );
}
