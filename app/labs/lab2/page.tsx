import './index.css';

export default function Lab2() {
  return (
    <div id="wd-lab2">
      <h2>Lab 2 - Cascading Style Sheets</h2>
      <h3>Styling with the STYLE attribute</h3>
      <p>
        Style attribute allows configuring look and feel right on the
        element. Although it&apos;s very convenient it is considered bad
        practice and you should avoid using the style attribute
      </p>
      <p
        id="wd-ai-style-attr"
        style={{ backgroundColor: "purple", color: "white" }}
      >
        This sample paragraph uses the style attribute to set a purple
        background and white text.
      </p>

      <p 
        style={{ backgroundColor: "green", color: "yellow" }}>
        Paragraph with green background and yellow text.
      </p>
    </div>
  );
}