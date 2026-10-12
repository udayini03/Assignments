import './index.css';

export default function Lab2() {
  return (
    <div id="wd-css-document-structure">
      <h2>Lab 2 - Cascading Style Sheets</h2>
      <div className="wd-selector-1">
        <h3>Document structure selectors</h3>
        <div className="wd-selector-2">
          Selectors can be combined to refer elements in particular
          places in the document
          <p className="wd-selector-3">
            This paragraph&apos;s red background is referenced as
            <br />
            .wd-selector-1 .wd-selector-3
            <br />
            meaning the descendant of some ancestor.
            <br />
            <span className="wd-selector-4">
              Whereas this span is a direct child of its parent
              <br />
              <span className="wd-selector-5">
                and this nested span is a grandchild of the paragraph
              </span>
            </span>
            <br />
            <span className="wd-ai-selector-5">
              This sample span is a descendant of .wd-selector-1
            </span>
            <br />
            You can combine these relationships to create specific
            styles depending on the document structure
          </p>
        </div>
      </div>
    </div>

    
  );
}