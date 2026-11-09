"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { FaPlus, FaSearch } from "react-icons/fa";
import AssignmentItem from "./AssignmentItem";
import DeleteAssignmentDialog from "./DeleteAssignmentDialog";
import { useAssignmentsStore, type Assignment } from "../../../store/assignmentsStore";
import { useAccountContext } from "../../../account/AccountContext";

export default function Assignments() {
  const { cid } = useParams();
  const courseId = String(cid);
  const router = useRouter();
  const { currentUser } = useAccountContext();
  const canEdit = currentUser?.role !== "STUDENT";
  const assignments = useAssignmentsStore((state) => state.assignments).filter(
    (assignment) => assignment.course === courseId,
  );
  const deleteAssignment = useAssignmentsStore((state) => state.deleteAssignment);
  const [pendingDelete, setPendingDelete] = useState<Assignment | null>(null);

  return (
    <div id="wd-assignments">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
        <div className="relative">
          <FaSearch className="pointer-events-none absolute top-1/2 left-3 -translate-y-1/2 text-neutral-500" />
          <input
            placeholder="Search for Assignments"
            id="wd-search-assignment"
            className="rounded border border-neutral-300 py-1.5 pr-3 pl-9 text-sm"
          />
        </div>
        {canEdit && (
          <div className="flex gap-2">
            <button
              id="wd-add-assignment-group"
              type="button"
              className="inline-flex items-center gap-1 rounded border border-neutral-300 bg-neutral-100 px-3 py-1.5 text-sm"
            >
              <FaPlus /> Group
            </button>
            <button
              id="wd-add-assignment"
              type="button"
              onClick={() => router.push(`/courses/${courseId}/assignments/new`)}
              className="inline-flex items-center gap-1 rounded bg-red-600 px-3 py-1.5 text-sm text-white"
            >
              <FaPlus /> Assignment
            </button>
          </div>
        )}
      </div>
      <h3
        id="wd-assignments-title"
        className="mb-3 flex items-center justify-between rounded bg-neutral-200 p-3 font-semibold"
      >
        <span>ASSIGNMENTS 40% of Total</span>
        <button type="button" className="rounded border border-neutral-300 bg-white px-2 py-1">
          <FaPlus />
        </button>
      </h3>
      <ul id="wd-assignment-list" className="m-0 list-none p-0">
        {assignments.map((assignment) => (
          <AssignmentItem
            key={assignment._id}
            cid={courseId}
            aid={assignment._id}
            title={assignment.title}
            details={`Multiple Modules | Not available until ${assignment.available} | Due ${assignment.due} | ${assignment.points} pts`}
            onDelete={canEdit ? () => setPendingDelete(assignment) : undefined}
          />
        ))}
      </ul>
      {pendingDelete && (
        <DeleteAssignmentDialog
          title={pendingDelete.title}
          onYes={() => {
            deleteAssignment(pendingDelete._id);
            setPendingDelete(null);
          }}
          onNo={() => setPendingDelete(null)}
        />
      )}
    </div>
  );
}
