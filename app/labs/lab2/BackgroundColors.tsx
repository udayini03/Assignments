export default function BackgroundColors() {
  return (
    <div id="wd-css-background-colors">
      <h2 className="wd-bg-color-blue wd-fg-color-white">Background color</h2>
      <p className="wd-bg-color-red wd-fg-color-black">
        This background of this paragraph is red but{" "}
        <span className="wd-bg-color-green wd-fg-color-white">
          the background of this text is green and the foreground white
        </span>
      </p>
      <p id="wd-ai-bg" className="wd-bg-color-yellow wd-fg-color-black">
        This sample block stacks a yellow background class with a black
        foreground class so the text stays readable.
      </p>
      <p className="wd-bg-color-yellow wd-fg-color-black">
        I am from Hyderabad, India, and I am a Masters student studying
        computer science.{" "}
        <span className="wd-bg-color-gray wd-fg-color-black">
          I love reading thriller novels, listening to pop music, and cooking
          ramen.
        </span>
      </p>
    </div>
  );
}