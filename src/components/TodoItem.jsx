import PropTypes from "prop-types";
import { useContext } from "react";
import { TodoContext } from "../App";

const TodoItem = ({ todo }) => {
  const { onUpdate, onDelete } = useContext(TodoContext);
  const onChangeCheckbox = () => {
    onUpdate(todo.id);
  };
  const onClickDelete = () => {
    onDelete(todo.id);
  };

  return (
    <div className="flex items-center justify-between h-8 text-sm">
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          onChange={onChangeCheckbox}
          checked={todo.isDone}
        />
        <div className="text-lg">{todo.content}</div>
      </div>
      <div className="flex items-center gap-2">
        <div className="text-gray-600">{todo.date}</div>
        <button
          onClick={onClickDelete}
          className="border rounded-3xl px-4 py-1 h-full bg-neutral-300 text-white text-xs"
        >
          삭제
        </button>
      </div>
    </div>
  );
};
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
};

export default TodoItem;
