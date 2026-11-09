"use client";

import { useState } from "react";

function dateObjectToHtmlDateString(date: Date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function htmlDateStringToDate(dateString: string) {
  const [year, month, day] = dateString.split("-").map(Number);
  return new Date(year, month - 1, day, 0, 0);
}

const input = "mb-2 block rounded border border-neutral-300 px-3 py-1.5";

export default function DateStateVariable() {
  const [startDate, setStartDate] = useState(new Date(2026, 0, 15, 10, 30));
  const [endDate, setEndDate] = useState(new Date(2026, 11, 12, 17, 0));
  const [dueDate, setDueDate] = useState(new Date(2026, 0, 22, 10, 30));
  return (
    <div id="wd-date-state-variables">
      <h2>Date State Variables</h2>
      <h3>{startDate.toDateString()}</h3>
      <h3>{dateObjectToHtmlDateString(startDate)}</h3>
      <input
        type="date"
        className={input}
        value={dateObjectToHtmlDateString(startDate)}
        onChange={(e) => setStartDate(htmlDateStringToDate(e.target.value))}
        id="wd-start-date"
      />
      <h4>My semester ends: {endDate.toDateString()}</h4>
      <h4>{dateObjectToHtmlDateString(endDate)}</h4>
      <input
        type="date"
        className={input}
        value={dateObjectToHtmlDateString(endDate)}
        onChange={(e) => setEndDate(htmlDateStringToDate(e.target.value))}
        id="wd-end-date"
      />
      <h4>Due: {dateObjectToHtmlDateString(dueDate)}</h4>
      <input
        type="date"
        className={input}
        value={dateObjectToHtmlDateString(dueDate)}
        onChange={(e) => setDueDate(htmlDateStringToDate(e.target.value))}
        id="wd-due-date"
      />
      <hr />
    </div>
  );
}
