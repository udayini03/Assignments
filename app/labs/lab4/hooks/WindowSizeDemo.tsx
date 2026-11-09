"use client";

import useWindowSize from "./useWindowSize";

export default function WindowSizeDemo() {
  const size = useWindowSize();
  return (
    <div id="wd-window-size-demo">
      <h3>useWindowSize</h3>
      {size ? (
        <p>
          Window size: {size.width} x {size.height}
        </p>
      ) : (
        <p>Loading window size...</p>
      )}
      <p>Resize the browser window and watch the numbers change.</p>
    </div>
  );
}
