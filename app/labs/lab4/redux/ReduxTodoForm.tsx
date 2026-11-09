export default function ReduxTodoForm({
  title,
  setTitle,
  editing,
  save,
}: {
  title: string;
  setTitle: (title: string) => void;
  editing: boolean;
  save: () => void;
}) {
  return (
    <div id="wd-redux-todo-form" className="mb-2 flex flex-wrap gap-2">
      <input
        id="wd-redux-todo-title"
        className="rounded border border-neutral-300 px-2 py-1"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button
        type="button"
        id="wd-redux-add-todo"
        className={`rounded px-3 py-1.5 text-sm ${
          editing ? "bg-yellow-400" : "bg-green-600 text-white"
        }`}
        onClick={save}
      >
        {editing ? "Update" : "Add"}
      </button>
    </div>
  );
}
