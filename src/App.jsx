import "./App.css";
import Header from "./components/Header";
import Editor from "./components/Editor";
import List from "./components/List";
import { getDate } from "./utils/getDate";
import { useState, useRef, useEffect, createContext } from "react";

export const TodoContext = createContext();

function App() {
  const [todos, setTodos] = useState([]);
  const idRef = useRef(0);

  console.log(todos);
  useEffect(() => {
    const storedData = localStorage.getItem("todos");
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setTodos(parsedData);
      idRef.current = Math.max(0, ...parsedData.map((todo) => todo.id)) + 1;
    }
  }, []);

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
    setTodos([newData, ...todos]); // 스프레드 연산자
  };

  /* const onUpdate = (targetId) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === targetId) {
          return {
            ...todo,
            isDone: !todo.isDone,
          };
        }
      })
    );
  };
  */
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
    <div className="flex flex-col gap-10 w-96 mx-auto my-0 font-sans">
      <Header />
      <TodoContext.Provider value={{ todos, onCreate, onUpdate, onDelete }}>
        <Editor />
        <List />
      </TodoContext.Provider>
    </div>
  );
}

export default App;
