"use client";

import { useState } from "react";
import CourseCard from "./CourseCard";
import {
  emptyCourse,
  useCoursesStore,
  type Course,
} from "../store/coursesStore";
import { isEnrolled, useEnrollmentsStore } from "../store/enrollmentsStore";
import { useAccountContext } from "../account/AccountContext";

const field =
  "block w-full max-w-xl rounded border border-neutral-300 px-3 py-1.5";
const label = "mt-2 mb-1 block text-sm font-medium";

export default function Dashboard() {
  const courses = useCoursesStore((state) => state.courses);
  const addCourse = useCoursesStore((state) => state.addCourse);
  const updateCourse = useCoursesStore((state) => state.updateCourse);
  const enrollments = useEnrollmentsStore((state) => state.enrollments);
  const enroll = useEnrollmentsStore((state) => state.enroll);
  const unenroll = useEnrollmentsStore((state) => state.unenroll);
  const { currentUser } = useAccountContext();
  const [course, setCourse] = useState<Course>(emptyCourse);
  const [showAllCourses, setShowAllCourses] = useState(false);

  const visibleCourses =
    currentUser && !showAllCourses
      ? courses.filter((c) => isEnrolled(enrollments, currentUser._id, c._id))
      : courses;

  return (
    <div id="wd-dashboard">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h1 id="wd-dashboard-title">Dashboard</h1>
        {currentUser && (
          <button
            type="button"
            id="wd-enrollments-toggle"
            className="rounded bg-blue-600 px-3 py-1.5 text-sm font-medium text-white"
            onClick={() => setShowAllCourses(!showAllCourses)}
          >
            {showAllCourses ? "My Enrollments" : "Enrollments"}
          </button>
        )}
      </div>
      <hr />
      <h5 className="mt-2 flex flex-wrap items-center gap-2">
        New Course
        <button
          type="button"
          className="rounded bg-blue-600 px-3 py-1.5 text-sm font-medium text-white"
          id="wd-add-new-course-click"
          onClick={() => addCourse(course)}
        >
          Add
        </button>
        <button
          type="button"
          className="rounded bg-yellow-400 px-3 py-1.5 text-sm font-medium"
          id="wd-update-course-click"
          onClick={() => updateCourse(course)}
        >
          Update
        </button>
      </h5>
      <label htmlFor="wd-course-name" className={label}>
        Course name
      </label>
      <input
        className={field}
        value={course.name}
        onChange={(e) => setCourse({ ...course, name: e.target.value })}
        id="wd-course-name"
      />
      <div className="flex max-w-xl flex-wrap gap-3">
        <div className="min-w-[180px] flex-1">
          <label htmlFor="wd-course-number" className={label}>
            Course number
          </label>
          <input
            className={field}
            value={course.number}
            onChange={(e) => setCourse({ ...course, number: e.target.value })}
            id="wd-course-number"
          />
        </div>
        <div className="min-w-[180px] flex-1">
          <label htmlFor="wd-course-start-date" className={label}>
            Start date
          </label>
          <input
            type="date"
            className={field}
            value={course.startDate}
            onChange={(e) => setCourse({ ...course, startDate: e.target.value })}
            id="wd-course-start-date"
          />
        </div>
      </div>
      <label htmlFor="wd-course-description" className={label}>
        Description
      </label>
      <textarea
        className={`${field} mb-3`}
        rows={3}
        value={course.description}
        onChange={(e) => setCourse({ ...course, description: e.target.value })}
        id="wd-course-description"
      />
      <hr />
      <h2 id="wd-dashboard-published">
        Published Courses ({visibleCourses.length})
      </h2>
      <hr />
      <div
        id="wd-dashboard-courses"
        className="mt-3 grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4"
      >
        {visibleCourses.map((c) => {
          const enrolled = currentUser
            ? isEnrolled(enrollments, currentUser._id, c._id)
            : false;
          return (
            <CourseCard
              key={c._id}
              course={c}
              onEdit={() => setCourse(c)}
              enrolled={currentUser ? enrolled : undefined}
              onToggleEnrollment={() =>
                currentUser &&
                (enrolled
                  ? unenroll(currentUser._id, c._id)
                  : enroll(currentUser._id, c._id))
              }
            />
          );
        })}
      </div>
    </div>
  );
}
