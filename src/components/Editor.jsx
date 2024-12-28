const Editor = () => {
  return (
    <div className="flex justify-between h-24 pb-16 border-b text-xs">
      <input
        className="w-9/12 border rounded p-2"
        placeholder="추가할 todo를 입력해주세요."
      />
      <button className="border rounded-3xl px-4 bg-neutral-500 text-white">
        추가
      </button>
    </div>
  );
};

export default Editor;
