export const getDate = (today) =>{
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const date = today.getDate();
  const day = today.getDay(); //0: 일요일, 1: 월요일 ...
  const dayList=["일","월","화","수","목","금","토"];

  return `${year}. ${month}. ${date}. ${dayList[day]}`;
};