export default function PassingFunctions({
  message,
  theFunction,
  theNameFunction,
  theOtherFunction,
}: {
  message: string;
  theFunction: (message: string) => void;
  theNameFunction: () => void;
  theOtherFunction: () => void;
}) {
  return (
    <div id="wd-passing-functions">
      <h2>Passing Functions</h2>
      <button
        type="button"
        onClick={() => theFunction(`From parent: ${message}`)}
        id="wd-pass-functions-click"
        className="me-2 rounded bg-green-600 px-3 py-1.5 text-sm font-medium text-white"
      >
        Invoke the Function
      </button>
      <button
        type="button"
        onClick={theNameFunction}
        id="wd-pass-functions-name-click"
        className="me-2 rounded bg-pink-600 px-3 py-1.5 text-sm font-medium text-white"
      >
        Who Am I?
      </button>
      <button
        type="button"
        onClick={theOtherFunction}
        id="wd-pass-functions-other-click"
        className="rounded bg-neutral-600 px-3 py-1.5 text-sm font-medium text-white"
      >
        Invoke the Other Function
      </button>
      <hr />
    </div>
  );
}
