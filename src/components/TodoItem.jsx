const TodoItem = ({ id, isDone, content, date, onUpdate, onDelete }) => {
  const onChangeCheckbox = () => {
    onUpdate(id);
  };
  const onClickDelete = () => {
    onDelete(id);
  };
  return (
    <div className="flex items-center justify-between gap-4 h-8 text-sm">
      <div className="flex items-center gap-2">
        <input
          onChange={onChangeCheckbox}
          checked={isDone}
          className="w-5 h-5"
          type="checkbox"
        />
        <div className="text-base">{content}</div>
      </div>
      <div className="text-gray-600">{date}</div>
      <button
        onClick={onClickDelete}
        className="border rounded-3xl px-4 h-full bg-neutral-300 text-white text-xs"
      >
        삭제
      </button>
    </div>
  );
};

export default TodoItem;
