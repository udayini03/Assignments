export default function TailwindBackgroundColors() {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-4">Background Colors</h2>
      <div className="bg-red-500 text-white p-4 mb-4">This div has a red background.</div>
      <div className="bg-green-500 text-white p-4 mb-4">This div has a green background.</div>
      <div className="bg-blue-500 text-white p-4 mb-4">This div has a blue background.</div>
      <div className="bg-yellow-500 text-black p-4 mb-4">This div has a yellow background.</div>
      <div id="wd-ai-bg" className="bg-indigo-700 text-white p-4 mb-4">
        This sample div has an indigo-700 background.
      </div>
      <div className="bg-pink-200 text-pink-900 p-4 mb-4">
        My band: a pink-200 background with pink-900 text, the color of my
        favorite pop playlists.
      </div>
    </div>
  );
}
