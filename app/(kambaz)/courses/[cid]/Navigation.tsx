"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "../../kambaz.css";

export default function CourseNavigation({ cid }: { cid: string }) {
  const pathname = usePathname() ?? "";
  const links = [
    { label: "Home", path: `/courses/${cid}/home`, id: "wd-course-home-link" },
    { label: "Modules", path: `/courses/${cid}/modules`, id: "wd-course-modules-link" },
    { label: "Piazza", path: `/courses/${cid}/piazza`, id: "wd-course-piazza-link" },
    { label: "Zoom", path: `/courses/${cid}/zoom`, id: "wd-course-zoom-link" },
    { label: "Assignments", path: `/courses/${cid}/assignments`, id: "wd-course-assignments-link" },
    { label: "Quizzes", path: `/courses/${cid}/quizzes`, id: "wd-course-quizzes-link" },
    { label: "Grades", path: `/courses/${cid}/grades`, id: "wd-course-grades-link" },
    { label: "People", path: `/courses/${cid}/people/table`, id: "wd-course-people-link" },
  ];
  return (
    <div id="wd-courses-navigation" className="wd list-group rounded-none">
      {links.map((link) => (
        <Link
          key={link.id}
          href={link.path}
          id={link.id}
          className={
            pathname === link.path || pathname.startsWith(link.path + "/")
              ? "list-group-item active border-0"
              : "list-group-item border-0 text-red-600"
          }
        >
          {link.label}
        </Link>
      ))}
      <Link
        href={`/courses/${cid}/home`}
        id="wd-course-ai-link"
        className="list-group-item border-0 text-red-600"
      >
        Sample
      </Link>
    </div>
  );
}
