export default function Dimensions() {
  return (
    <div id="wd-css-dimensions">
      <h2>Dimension</h2>
      <div>
        <div className="wd-dimension-portrait wd-bg-color-yellow">Portrait</div>
        <div className="wd-dimension-landscape wd-bg-color-blue wd-fg-color-white">
          Landscape
        </div>
        <div className="wd-dimension-square wd-bg-color-red">Square</div>
        <div id="wd-ai-dimension" className="wd-ai-dimension">
          This sample box has a long sentence, but its declared width and
          height stay fixed, so the extra text spills out below it.
        </div>
        <div className="wd-dimension-wide wd-bg-color-gray">Wide</div>
      </div>
    </div>
  );
}