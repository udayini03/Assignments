"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { FaUserCircle } from "react-icons/fa";
import { emptyUser, type User } from "../../../../account/AccountContext";
import { useUsersStore } from "../../../../store/usersStore";
import { isEnrolled, useEnrollmentsStore } from "../../../../store/enrollmentsStore";

const field = "rounded border border-neutral-300 px-2 py-1 text-sm";

export default function PeopleTable() {
  const { cid } = useParams();
  const courseId = String(cid);
  const users = useUsersStore((state) => state.users);
  const addUser = useUsersStore((state) => state.addUser);
  const enrollments = useEnrollmentsStore((state) => state.enrollments);
  const enroll = useEnrollmentsStore((state) => state.enroll);
  const unenroll = useEnrollmentsStore((state) => state.unenroll);
  const [person, setPerson] = useState<User>(emptyUser);
  const enrolled = users.filter((usr) => isEnrolled(enrollments, usr._id, courseId));

  const addPerson = () => {
    if (!person.firstName.trim() || !person.lastName.trim()) return;
    const newUser = {
      ...person,
      _id: crypto.randomUUID(),
      username: `${person.firstName}.${person.lastName}`.toLowerCase(),
    };
    addUser(newUser);
    enroll(newUser._id, courseId);
    setPerson(emptyUser);
  };

  return (
    <div id="wd-people-table" className="overflow-x-auto">
      <div id="wd-add-person-form" className="mb-3 flex flex-wrap items-center gap-2">
        <input
          id="wd-person-first-name"
          placeholder="First name"
          className={field}
          value={person.firstName}
          onChange={(e) => setPerson({ ...person, firstName: e.target.value })}
        />
        <input
          id="wd-person-last-name"
          placeholder="Last name"
          className={field}
          value={person.lastName}
          onChange={(e) => setPerson({ ...person, lastName: e.target.value })}
        />
        <input
          id="wd-person-login-id"
          placeholder="Login ID"
          className={field}
          value={person.loginId}
          onChange={(e) => setPerson({ ...person, loginId: e.target.value })}
        />
        <select
          id="wd-person-role"
          className={field}
          value={person.role}
          onChange={(e) => setPerson({ ...person, role: e.target.value })}
        >
          <option value="STUDENT">Student</option>
          <option value="TA">TA</option>
          <option value="FACULTY">Faculty</option>
        </select>
        <button
          type="button"
          id="wd-add-person-click"
          onClick={addPerson}
          className="rounded bg-red-600 px-3 py-1.5 text-sm text-white"
        >
          + People
        </button>
      </div>
      <table className="w-full border-collapse text-left text-sm">
        <thead>
          <tr className="border-b border-neutral-300">
            <th className="p-2">Name</th>
            <th className="p-2">Login ID</th>
            <th className="p-2">Section</th>
            <th className="p-2">Role</th>
            <th className="p-2">Last Activity</th>
            <th className="p-2">Total Activity</th>
            <th className="p-2"></th>
          </tr>
        </thead>
        <tbody>
          {enrolled.map((user) => (
            <tr key={user._id} className="odd:bg-neutral-50">
              <td className="wd-full-name p-2 text-nowrap">
                <FaUserCircle className="me-2 inline align-middle text-4xl text-neutral-500" />
                <span className="wd-first-name">{user.firstName}</span>{" "}
                <span className="wd-last-name">{user.lastName}</span>
              </td>
              <td className="wd-login-id p-2">{user.loginId}</td>
              <td className="wd-section p-2">{user.section}</td>
              <td className="wd-role p-2">{user.role}</td>
              <td className="wd-last-activity p-2">{user.lastActivity}</td>
              <td className="wd-total-activity p-2">{user.totalActivity}</td>
              <td className="p-2">
                <button
                  type="button"
                  className="wd-unenroll-person rounded bg-red-600 px-2 py-0.5 text-xs text-white"
                  onClick={() => unenroll(user._id, courseId)}
                >
                  Unenroll
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
