export default function DeleteAssignmentDialog({
  title,
  onYes,
  onNo,
}: {
  title: string;
  onYes: () => void;
  onNo: () => void;
}) {
  return (
    <div
      id="wd-delete-assignment-dialog"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
    >
      <div className="w-full max-w-md rounded-lg bg-white shadow-lg">
        <div className="border-b border-neutral-200 px-4 py-3">
          <h3 className="m-0 text-lg font-semibold">Delete Assignment</h3>
        </div>
        <p className="px-4 py-3">
          Are you sure you want to remove <strong>{title}</strong>?
        </p>
        <div className="flex justify-end gap-2 border-t border-neutral-200 px-4 py-3">
          <button
            type="button"
            id="wd-delete-assignment-no"
            onClick={onNo}
            className="rounded border border-neutral-300 bg-white px-3 py-1.5 text-sm"
          >
            No
          </button>
          <button
            type="button"
            id="wd-delete-assignment-yes"
            onClick={onYes}
            className="rounded bg-red-600 px-3 py-1.5 text-sm font-medium text-white"
          >
            Yes
          </button>
        </div>
      </div>
    </div>
  );
}
