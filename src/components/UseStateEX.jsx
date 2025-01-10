import { useState } from "react";

const UseStateEx = () => {
  const [count, setCount] = useState(0);
  console.log(count);

  return (
    <>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
        className="bg-black text-white"
      >
        증가
      </button>
    </>
  );
};

export default UseStateEx;
