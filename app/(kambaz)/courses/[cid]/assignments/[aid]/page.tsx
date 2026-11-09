"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import {
  emptyAssignment,
  useAssignmentsStore,
  type Assignment,
} from "../../../../store/assignmentsStore";
import { useAccountContext } from "../../../../account/AccountContext";

const input =
  "w-full rounded border border-neutral-300 px-3 py-1.5 text-sm";
const label = "mb-1 block text-sm font-medium";

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const courseId = String(cid);
  const assignmentId = String(aid);
  const router = useRouter();
  const { currentUser } = useAccountContext();
  const canEdit = currentUser?.role !== "STUDENT";
  const isNew = assignmentId === "new";
  const existing = useAssignmentsStore((state) =>
    state.assignments.find((a) => a._id === assignmentId),
  );
  const addAssignment = useAssignmentsStore((state) => state.addAssignment);
  const updateAssignment = useAssignmentsStore((state) => state.updateAssignment);
  const [assignment, setAssignment] = useState<Assignment>(
    existing ?? { ...emptyAssignment, course: courseId },
  );
  const backToList = () => router.push(`/courses/${courseId}/assignments`);

  const save = () => {
    if (isNew) {
      addAssignment({ ...assignment, course: courseId });
    } else {
      updateAssignment(assignment);
    }
    backToList();
  };

  if (!isNew && !existing) {
    return <p id="wd-assignment-not-found">Assignment {assignmentId} was not found.</p>;
  }

  return (
    <div id="wd-assignments-editor" className="max-w-3xl">
      <div className="mb-4">
        <label htmlFor="wd-name" className={label}>
          Assignment Name
        </label>
        <input
          id="wd-name"
          value={assignment.title}
          onChange={(e) => setAssignment({ ...assignment, title: e.target.value })}
          className={input}
        />
        <p id="wd-assignment-id" className="mt-1 text-sm text-neutral-600">
          Assignment id: {isNew ? "(new)" : assignment._id}
        </p>
      </div>
      <div className="mb-4">
        <textarea
          id="wd-description"
          rows={8}
          className={`${input} font-sans`}
          value={assignment.description}
          onChange={(e) => setAssignment({ ...assignment, description: e.target.value })}
        />
      </div>

      <div className="mb-4 grid grid-cols-1 gap-x-4 gap-y-4 md:grid-cols-[180px_1fr] md:items-start">
        <label htmlFor="wd-points" className="text-sm font-medium md:pt-1.5 md:text-right">
          Points
        </label>
        <input
          id="wd-points"
          type="number"
          value={assignment.points}
          onChange={(e) =>
            setAssignment({ ...assignment, points: parseInt(e.target.value) || 0 })
          }
          className={input}
        />

        <label htmlFor="wd-group" className="text-sm font-medium md:pt-1.5 md:text-right">
          Assignment Group
        </label>
        <select id="wd-group" defaultValue="ASSIGNMENTS" className={input}>
          <option value="ASSIGNMENTS">ASSIGNMENTS</option>
          <option value="QUIZZES">QUIZZES</option>
          <option value="EXAMS">EXAMS</option>
          <option value="PROJECT">PROJECT</option>
        </select>

        <label htmlFor="wd-display-grade-as" className="text-sm font-medium md:pt-1.5 md:text-right">
          Display Grade as
        </label>
        <select id="wd-display-grade-as" defaultValue="PERCENTAGE" className={input}>
          <option value="PERCENTAGE">Percentage</option>
          <option value="POINTS">Points</option>
          <option value="LETTER">Letter Grade</option>
        </select>

        <label htmlFor="wd-submission-type" className="text-sm font-medium md:pt-1.5 md:text-right">
          Submission Type
        </label>
        <div className="rounded border border-neutral-300 p-3">
          <select id="wd-submission-type" defaultValue="ONLINE" className={`${input} mb-3`}>
            <option value="ONLINE">Online</option>
            <option value="ON_PAPER">On Paper</option>
            <option value="NO_SUBMISSION">No Submission</option>
          </select>
          <div className="mb-2 text-sm font-semibold">Online Entry Options</div>
          {[
            ["wd-text-entry", "Text Entry"],
            ["wd-website-url", "Website URL"],
            ["wd-media-recordings", "Media Recordings"],
            ["wd-student-annotation", "Student Annotation"],
            ["wd-file-upload", "File Uploads"],
          ].map(([id, text]) => (
            <div key={id} className="mb-2 flex items-center gap-2 text-sm">
              <input type="checkbox" id={id} />
              <label htmlFor={id}>{text}</label>
            </div>
          ))}
        </div>

        <span className="text-sm font-medium md:pt-1.5 md:text-right">Assign</span>
        <div className="rounded border border-neutral-300 p-3">
          <label htmlFor="wd-assign-to" className={label}>
            Assign to
          </label>
          <input id="wd-assign-to" defaultValue="Everyone" className={`${input} mb-3`} />
          <label htmlFor="wd-due-date" className={label}>
            Due
          </label>
          <input
            type="date"
            id="wd-due-date"
            value={assignment.due}
            onChange={(e) => setAssignment({ ...assignment, due: e.target.value })}
            className={`${input} mb-3`}
          />
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label htmlFor="wd-available-from" className={label}>
                Available from
              </label>
              <input
                type="date"
                id="wd-available-from"
                value={assignment.available}
                onChange={(e) => setAssignment({ ...assignment, available: e.target.value })}
                className={input}
              />
            </div>
            <div>
              <label htmlFor="wd-available-until" className={label}>
                Until
              </label>
              <input
                type="date"
                id="wd-available-until"
                value={assignment.until ?? ""}
                onChange={(e) => setAssignment({ ...assignment, until: e.target.value })}
                className={input}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mb-4">
        <label htmlFor="wd-ai-editor-notes" className={label}>
          Sample notes
        </label>
        <textarea id="wd-ai-editor-notes" rows={3} className={`${input} font-sans`} />
      </div>

      <hr className="mb-3" />
      <div className="flex justify-end gap-2">
        <button
          type="button"
          onClick={backToList}
          id="wd-cancel"
          className="rounded border border-neutral-300 bg-neutral-100 px-3 py-1.5 text-sm text-neutral-900"
        >
          Cancel
        </button>
        {canEdit && (
          <button
            type="button"
            onClick={save}
            id="wd-save"
            className="rounded bg-red-600 px-3 py-1.5 text-sm text-white"
          >
            Save
          </button>
        )}
      </div>
    </div>
  );
}
