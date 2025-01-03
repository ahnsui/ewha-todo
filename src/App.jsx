import "./App.css";
import Header from "./components/Header";
import Editor from "./components/Editor";
import List from "./components/List";
import { getDate } from "./utils/getDate";
import { useState } from "react";

const mockData = [
  {
    id: 0,
    isDone: false,
    content: "React 공부하기",
    date: getDate(new Date()),
  },
  { id: 1, isDone: false, content: "빨래하기", date: getDate(new Date()) },
  {
    id: 2,
    isDone: false,
    content: "노래 연습하기",
    date: getDate(new Date()),
  },
];

function App() {
  const [todos, setTodos] = useState(mockData);
  console.log(todos);
  return (
    <div className="flex flex-col gap-10 w-96 mx-auto my-0 font-sans">
      <Header />
      <Editor />
      <List />
    </div>
  );
}

export default App;
