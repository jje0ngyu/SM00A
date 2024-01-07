import dayjs from 'dayjs';
import React from 'react';

function TileContent({ date, view, mark }) {

  // 날짜 타일에 컨텐츠 추가하기 (html 태그)
  // 추가할 html 태그를 변수 초기화
  let html = [];
  // 현재 날짜가 post 작성한 날짜 배열(mark)에 있다면, dot div 추가
  if (mark.find((x) => x === dayjs(date).format("YYYY-MM-DD"))) {
    html.push(<div className="font-bold">정유정</div>);
  }
  // 다른 조건을 주어서 html.push 에 추가적인 html 태그를 적용할 수 있음.
  return (
    <>
      <div className="flex justify-center items-center absoluteDiv">
        {html}
      </div>
    </>
  );
}

export default TileContent;