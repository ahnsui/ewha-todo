const TodoItem = () => {
  return (
    <div className="flex items-center justify-between h-8 text-sm">
      <div className="flex items-center gap-2">
        <input type="checkbox" />
        <div className="text-lg">task1</div>
      </div>
      <div className="flex items-center gap-2">
        <div className="text-gray-600">날짜</div>
        <button className="border rounded-3xl px-4 h-full bg-neutral-300 text-white text-xs">
          삭제
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
