const TodoItem=()=>{
  return (
    <div className="flex items-center justify-between gap04 h08 text-sm">
      <div className="flex items-center gap-2">
        <input className="w-5 h-5" type="checkbox"/>
        <div className="text-lg">task1</div>
      </div>
      <div className="text-gray-600">날짜</div>
      <button className="border rounded-3xl px-4 h-full bg-neutral-300 text-white text-xs">
        삭제
      </button>
    </div>
  );
};

export default TodoItem;