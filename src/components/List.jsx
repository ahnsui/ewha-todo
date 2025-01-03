import TodoItem from "./TodoItem";

const List = () => {
  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-2xl font-semibold">Todo List</h1>
      <input
        className="w-full border rounded p-2 h-7 text-xs"
        placeholder="검색할 todo를 입력해주세요."
      />
      <TodoItem />
      <TodoItem />
      <TodoItem />
    </div>
  );
};

export default List;
