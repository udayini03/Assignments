import Link from "next/link";
import Image from "next/image";
import { useCoursesStore, type Course } from "../store/coursesStore";

export default function CourseCard({
  course,
  onEdit,
  enrolled,
  onToggleEnrollment,
}: {
  course: Course;
  onEdit: () => void;
  enrolled?: boolean;
  onToggleEnrollment?: () => void;
}) {
  const deleteCourse = useCoursesStore((state) => state.deleteCourse);
  return (
    <div className="wd-dashboard-course w-[300px] max-w-full overflow-hidden rounded border border-neutral-200 shadow-sm">
      <Link
        href={`/courses/${course._id}/home`}
        className="wd-dashboard-course-link block text-neutral-900 no-underline"
      >
        <Image
          src={course.image}
          width={300}
          height={160}
          alt={course.name}
          className="h-40 w-full object-cover"
        />
        <div className="p-4">
          <h5 className="wd-dashboard-course-title m-0 mb-2 truncate text-lg font-semibold whitespace-nowrap">
            {course.name}
          </h5>
          <p className="wd-dashboard-course-number m-0 mb-1 text-xs text-neutral-500">
            {course.number} · starts {course.startDate}
          </p>
          <p className="wd-dashboard-course-description m-0 mb-3 h-[100px] overflow-hidden text-sm text-neutral-600">
            {course.description}
          </p>
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded bg-blue-600 px-3 py-1.5 text-sm text-white"
            >
              Go
            </button>
            <button
              type="button"
              id="wd-edit-course-click"
              className="inline-flex items-center justify-center rounded bg-yellow-400 px-3 py-1.5 text-sm"
              onClick={(event) => {
                event.preventDefault();
                onEdit();
              }}
            >
              Edit
            </button>
            <button
              type="button"
              id="wd-delete-course-click"
              className="inline-flex items-center justify-center rounded bg-red-600 px-3 py-1.5 text-sm text-white"
              onClick={(event) => {
                event.preventDefault();
                deleteCourse(course._id);
              }}
            >
              Delete
            </button>
            {enrolled !== undefined && (
              <button
                type="button"
                id={enrolled ? "wd-unenroll-course-click" : "wd-enroll-course-click"}
                className={`inline-flex items-center justify-center rounded px-3 py-1.5 text-sm text-white ${
                  enrolled ? "bg-red-600" : "bg-green-600"
                }`}
                onClick={(event) => {
                  event.preventDefault();
                  onToggleEnrollment?.();
                }}
              >
                {enrolled ? "Unenroll" : "Enroll"}
              </button>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
}
