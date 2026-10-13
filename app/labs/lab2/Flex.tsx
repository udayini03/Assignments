export default function Flex() {
  return (
    <div id="wd-css-flex">
      <h2>Flex</h2>
      <div className="wd-flex-row-container">
        <div className="wd-bg-color-yellow">Column 1</div>
        <div className="wd-bg-color-blue wd-fg-color-white">Column 2</div>
        <div className="wd-bg-color-red wd-fg-color-white">Column 3</div>
      </div>
      <br />
      <div className="wd-flex-row-container">
        <div className="wd-bg-color-yellow">Column 1</div>
        <div className="wd-bg-color-blue wd-fg-color-white">Column 2</div>
        <div className="wd-bg-color-red wd-fg-color-white wd-flex-grow-1">
          Column 3
        </div>
      </div>
      <br />
      <div className="wd-flex-row-container">
        <div className="wd-bg-color-yellow wd-width-110px">Column 1</div>
        <div className="wd-bg-color-blue wd-fg-color-white">Column 2</div>
        <div className="wd-bg-color-red wd-fg-color-white wd-flex-grow-1">
          Column 3
        </div>
      </div>
      <br />
      <div id="wd-ai-flex" className="wd-flex-row-container">
        <div className="wd-bg-color-gray wd-width-110px">Pinned 110px</div>
        <div className="wd-bg-color-yellow">Natural width</div>
        <div className="wd-bg-color-green wd-fg-color-white wd-flex-grow-1">
          Stretches with flex-grow
        </div>
      </div>
      <br />
      <div className="wd-flex-row-container">
        <div className="wd-bg-color-red wd-fg-color-white wd-flex-grow-1">
          Thriller novels (grows)
        </div>
        <div className="wd-bg-color-blue wd-fg-color-white wd-width-110px">
          Pop music
        </div>
      </div>
    </div>
  );
}
