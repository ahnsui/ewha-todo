export const getDate = (today) => {
    const year = today.getFullYear();
    const month = today.getMonth() + 1; // getMonth()는 0부터 시작하므로 +1
    const date = today.getDate();
    const day = today.getDay(); // 요일 (0: 일요일, 1: 월요일, ...)
  
    const dayList = ["일", "월", "화", "수", "목", "금", "토"];
  
    // 문자열로 형식화된 날짜 반환
    return `${year}. ${month}. ${date}. ${dayList[day]}`;
  };