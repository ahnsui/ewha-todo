import PropTypes from "prop-types";

const TodoItem = ({ id, isDone, content, date, onUpdate }) => {
  const onChangeCheckbox = () => {
    onUpdate(id);
  };
  return (
    <div className="flex items-center justify-between h-8 text-sm">
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={isDone}
          className="w-5 h-5"
          onChange={onChangeCheckbox}
        />
        <div className="text-lg">{content}</div>
      </div>
      <div className="text-gray-600">{date}</div>
      <button className="border rounded-3xl px-4 h-full bg-neutral-300 text-white text-xs">
        삭제
      </button>
    </div>
  );
};
TodoItem.propTypes = {
  todos: PropTypes.object.isRequired,
};

export default TodoItem;
