import TileContent from "components/atom/TileContent";
import dayjs, { locale } from "dayjs";
import React from "react";
import Calendar from "react-calendar";
import "styles/calendarViewer.css";

dayjs.locale("ko");

function CalendarViewer() {
  const mark = ["2024-01-06", "2024-01-10", "2024-01-15"]; // props로 받을 예정.

  return (
    <section className="rounded-md">
      <h2 className="text-2xl font-bold my-2">일정 보기</h2>
      <Calendar
        formatDay={(locale, date) => dayjs(date).format("DD")}
        tileContent={({date, view}) => <TileContent date={date} view={view} mark={mark} />}
      />
      <div className="test">{"test"}</div>
    </section>
  );
}

export default CalendarViewer;
