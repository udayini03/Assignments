"use client";

const hello = () => {
  alert("Hello World!");
};

const helloUdayini = () => {
  alert("Hi, I'm Udayini from Hyderabad! Thanks for clicking my button.");
};

const goodbye = () => {
  alert("Goodbye World!");
};

export default function ClickEvent() {
  return (
    <div id="wd-click-event">
      <h2>Click Event</h2>
      <button
        type="button"
        onClick={hello}
        id="wd-onclick-hello"
        className="me-2 rounded bg-red-600 px-3 py-1.5 text-sm font-medium text-white"
      >
        Click Hello
      </button>
      <button
        type="button"
        onClick={helloUdayini}
        id="wd-onclick-udayini"
        className="me-2 rounded bg-pink-600 px-3 py-1.5 text-sm font-medium text-white"
      >
        Say Hi to Udayini
      </button>
      <button
        type="button"
        onClick={goodbye}
        id="wd-onclick-goodbye"
        className="rounded bg-neutral-600 px-3 py-1.5 text-sm font-medium text-white"
      >
        Click Goodbye
      </button>
      <hr />
    </div>
  );
}
