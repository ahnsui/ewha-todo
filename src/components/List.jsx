import TodoItem from "./TodoItem";
import PropTypes from "prop-types";
import { useState } from "react";

const List = ({ todos }) => {
  const [search, setSearch] = useState("");
  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };
  console.log(search);

  const getFilteredList = () => {
    if (search === "") return todos;
    return todos.filter((todo) =>
      todo.content.toLowerCase().includes(search.toLowerCase())
    );
  };
  const filteredTodos = getFilteredList();

  return (
    <div className="flex flex-col gap-4">
      {filteredTodos.map((todo) => {
        return <TodoItem key={todo.id} {...todo} />;
      })}
      <h1 className="text-2xl font-semibold">Todo List</h1>
      <input
        className="w-full border rounded p-2 h-7 text-xss"
        placeholder="검색할 todo를 입력해주세요."
        value={search}
        onChange={onChangeSearch}
      />
      {todos.map((todo) => {
        return <TodoItem key={todo.id} todo={todo} />;
      })}
    </div>
  );
};
List.propTypes = {
  todos: PropTypes.array.isRequired,
};

export default List;
