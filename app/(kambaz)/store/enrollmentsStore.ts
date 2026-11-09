"use client";

import { create } from "zustand";
import enrollmentsJson from "../database/enrollments.json";

export type Enrollment = (typeof enrollmentsJson)[number];

type EnrollmentsStore = {
  enrollments: Enrollment[];
  enroll: (userId: string, courseId: string) => void;
  unenroll: (userId: string, courseId: string) => void;
};

export const isEnrolled = (
  enrollments: Enrollment[],
  userId: string,
  courseId: string,
) => enrollments.some((e) => e.user === userId && e.course === courseId);

export const useEnrollmentsStore = create<EnrollmentsStore>((set) => ({
  enrollments: enrollmentsJson,
  enroll: (userId, courseId) =>
    set((state) =>
      isEnrolled(state.enrollments, userId, courseId)
        ? state
        : {
            enrollments: [
              ...state.enrollments,
              { _id: crypto.randomUUID(), user: userId, course: courseId },
            ],
          },
    ),
  unenroll: (userId, courseId) =>
    set((state) => ({
      enrollments: state.enrollments.filter(
        (e) => !(e.user === userId && e.course === courseId),
      ),
    })),
}));
