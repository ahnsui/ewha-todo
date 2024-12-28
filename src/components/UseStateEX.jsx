import { useState } from "react";

const UseStateEX = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <button
        className="bg-black text-white"
        onClick={() => {
          setCount(count + 1);
        }}
      >
        증가
      </button>
      <h1>{count}</h1>
    </>
  );
};

export default UseStateEX;
