import "./App.css";
import { useState, useRef, useEffect } from "react";

import Header from "./components/Header";
import Editor from "./components/Editor";
import List from "./components/List";
import { getDate } from "./utils/getDate";

function App() {
  const [todos, setTodos] = useState([]);
  const idRef = useRef(0);

  // 초기 데이터 로드
  useEffect(() => {
    const storedTodos = localStorage.getItem("todos"); // 로컬스토리지에서 데이터 가져오기
    if (storedTodos) {
      const parsedTodos = JSON.parse(storedTodos); // 문자열 데이터를 객체로 변환
      setTodos(parsedTodos); // 상태 업데이트
      idRef.current = Math.max(0, ...parsedTodos.map((todo) => todo.id)) + 1;
    }
  }, []);

  // todos 상태 변경 시 로컬스토리지에 저장
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const onCreate = (content) => {
    const newData = {
      id: idRef.current++,
      isDone: false,
      content: content,
      date: getDate(new Date()),
    };
    setTodos([newData, ...todos]);
  };

  const onUpdate = (targetId) => {
    setTodos(
      todos.map((todo) =>
        todo.id === targetId ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  const onDelete = (targetId) => {
    setTodos(todos.filter((todo) => todo.id !== targetId));
  };

  return (
    <div className="flex flex-col gap-8 w-96 mx-auto my-0 font-sans">
      <Header />
      <Editor onCreate={onCreate} />
      <List todos={todos} onUpdate={onUpdate} onDelete={onDelete} />
    </div>
  );
}

export default App;
