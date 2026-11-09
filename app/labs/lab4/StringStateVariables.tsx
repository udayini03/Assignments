"use client";

import { useState } from "react";

const input = "mb-2 block w-full max-w-sm rounded border border-neutral-300 px-3 py-1.5";

export default function StringStateVariables() {
  const [firstName, setFirstName] = useState("Udayini");
  const [lastName, setLastName] = useState("Vedantham");
  const [nickName, setNickName] = useState("JD");
  return (
    <div id="wd-string-state-variables">
      <h2>String State Variables</h2>
      <p>{firstName}</p>
      <p id="wd-full-name">
        {firstName} {lastName}
      </p>
      <p>{nickName}</p>
      <input
        className={input}
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        id="wd-first-name"
      />
      <input
        className={input}
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        id="wd-last-name"
      />
      <input
        className={input}
        value={nickName}
        onChange={(e) => setNickName(e.target.value)}
        id="wd-nick-name"
      />
      <hr />
    </div>
  );
}
