import './index.css';
import ForegroundColors from './ForegroundColors'; 
import BackgroundColors from './BackgroundColors'; 
import Borders from './Borders'; 
import Padding from './Padding'; 
import Margins from './Margins'; 
import BoxModel from './BoxModel'; 
import Corners from './Corners'; 
import Display from './Display'; 
import Dimensions from './Dimensions'; 

export default function Lab2() {
  return (
    <div>
      <div id="wd-lab2">
        <h2>Lab 2 - Cascading Style Sheets</h2>
        <h3>Styling with the STYLE attribute</h3>
        <p>
          Style attribute allows configuring look and feel right on the
          element. Although it&apos;s very convenient it is considered bad
          practice and you should avoid using the style attribute
        </p>
      </div>
      <div id="wd-css-id-selectors">
        <h3>ID selectors</h3>
        <p id="wd-id-selector-1">
          Instead of changing the look and feel of all the
          elements of the same name, e.g., P, we can refer to a
          specific element by its ID
        </p>
        <p id="wd-id-selector-2">
          Here&apos;s another paragraph using a different ID and a
          different look and feel
        </p>
        <p id="wd-ai-id-selector">
          This sample paragraph is styled only through its own ID selector.
        </p>
        <p id="wd-id-selector-3">
          I am Udayinii
        </p>
      </div>
      <div id="wd-css-class-selectors">
        <h3>Class selectors</h3>
        <p className="wd-class-selector">
          Instead of using IDs to refer to elements, you can use an
          element&apos;s CLASS attribute
        </p>
        <h4 className="wd-class-selector">
          This heading has same style as paragraph above
        </h4>
        <p className="wd-ai-class-selector">
          This sample paragraph shares a class with the heading below.
        </p>
        <h4 className="wd-ai-class-selector">
          This sample heading shares a class with the paragraph above
        </h4>
        <p className="wd-my-class">
          I love reading thriller novels
        </p>
        <h4 className="wd-my-class">
          My favourite hobby
        </h4>
      </div>
      <div id="wd-css-document-structure">
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
      <div id="wd-css-specificity">
        <h3>Specificity</h3>
        <mark id="wd-specificity-id" className="wd-specificity-class">
          A tag rule, a class rule, and an id rule all set this text&apos;s
          color. The id rule wins.
        </mark>
        <p id="wd-ai-cascade" className="wd-ai-cascade">
          A tag rule, a class rule, and an id rule all set this
          paragraph&apos;s background color.
        </p>
      </div>
      <ForegroundColors />
      <BackgroundColors />
      <Borders />
      <Padding />
      <Margins />
      <BoxModel />  
      <Corners />
      <Dimensions />
      <Display />
    </div>

    
  );
}