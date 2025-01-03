import { getDate } from "../utils/getDate";

const Header = () => {
  const today = new Date();
  return (
    <div className="flex justify-between mt-14">
      <div className="flex flex-col text-2xl font-semibold">
        <h1>{getDate(today)}</h1>
        <div className="flex">
          <h1>오늘의 날씨</h1>
          <h1>아이콘</h1>
        </div>
      </div>
      <img className="w-16" alt="rocket" src="/Emoji.png" />
    </div>
  );
};

export default Header;
