export default function VariablesAndConstants() {
  var functionScoped = 2;
  let blockScoped = 5;
  const constant1 = functionScoped - blockScoped;
  let myName = "Udayini";
  const myGreeting = `Hi, I'm ${myName} and this is my Lab 3`;
  const sampleSum = functionScoped + blockScoped;
  return (
    <div id="wd-variables-and-constants">
      <h4>Variables and Constants</h4>
      functionScoped = {functionScoped} <br />
      blockScoped = {blockScoped}       <br />
      constant1 = {constant1}           <br />
      myName = {myName}                 <br />
      myGreeting = {myGreeting}         <br />
      sampleSum = {sampleSum}
      <hr />
    </div>
  );
}
