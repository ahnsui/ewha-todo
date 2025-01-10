import { useState, useRef } from "react";
import "./App.css";
import { getDate } from "./utils/getDate";
import Header from "./components/Header";
import Editor from "./components/Editor";
import List from "./components/List";

const mockData = [
  {
    id: 0,
    isDone: false,
    content: "React 공부하기",
    date: getDate(new Date()),
  },
  {
    id: 1,
    isDone: false,
    content: "빨래하기",
    date: getDate(new Date()),
  },
  {
    id: 2,
    isDone: false,
    content: "노래 연습하기",
    date: getDate(new Date()),
  },
];

function App() {
  const [todos, setTodos] = useState(mockData);
  const idRef = useRef(3);

  console.log(todos);

  const onCreate = (content) => {
    const newData = {
      id: idRef.current++,
      isDone: false,
      content: content,
      date: getDate(new Date()),
    };
    setTodos([newData, ...todos]);
  };
  return (
    <div className="flex flex-col gap-10 w-96 mx-auto my-0 font-sans">
      <Header />
      <Editor onCreate={onCreate} />
      <List todos={todos} />
    </div>
  );
}

export default App;
