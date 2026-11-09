"use client";

import { ReactNode, useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { FaAlignJustify } from "react-icons/fa6";
import CourseNavigation from "./Navigation";
import Breadcrumb from "./Breadcrumb";
import { useCoursesStore } from "../../store/coursesStore";
import { isEnrolled, useEnrollmentsStore } from "../../store/enrollmentsStore";
import { useAccountContext } from "../../account/AccountContext";

export default function CoursesLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const { cid } = useParams();
  const courseId = typeof cid === "string" ? cid : "";
  const courses = useCoursesStore((state) => state.courses);
  const course = courses.find((c) => c._id === courseId);
  const enrollments = useEnrollmentsStore((state) => state.enrollments);
  const { currentUser } = useAccountContext();
  const router = useRouter();
  const [showCourseNav, setShowCourseNav] = useState(true);

  // A signed-in user can only open courses they are enrolled in
  const blocked =
    currentUser !== null && !isEnrolled(enrollments, currentUser._id, courseId);
  useEffect(() => {
    if (blocked) router.push("/dashboard");
  }, [blocked, router]);
  if (blocked) return null;

  return (
    <div id="wd-courses">
      <h2 className="text-2xl font-semibold text-red-600">
        <FaAlignJustify
          className="me-4 mb-1 inline cursor-pointer text-xl"
          onClick={() => setShowCourseNav(!showCourseNav)}
          title="Toggle course navigation"
          id="wd-course-nav-toggle"
        />
        <Breadcrumb course={course} />
        <span id="wd-course-id" className="ms-2 text-base text-neutral-500">
          ({course?._id})
        </span>
      </h2>
      <hr className="my-3" />
      <div className="flex gap-4">
        {showCourseNav ? (
          <div className="hidden w-[140px] shrink-0 md:block">
            <CourseNavigation cid={courseId} />
          </div>
        ) : null}
        <div className="min-w-0 flex-1">{children}</div>
      </div>
    </div>
  );
}
