import React, {useState} from "react";


export default function PrtuseState() {
  const [count, setCount] = useState(0);

  const onClickAdd = () => {
    setCount(count+1)
  }

  return (
    <div className=" bg-red-100 min-h-screen flex flex-col justify-center items-center">
      <div>{count}</div>
      <button
        className=" bg-green-300 w-12 h-12 rounded-full"
        onClick={onClickAdd}
      >
        +
      </button>
    </div>
  );
}
