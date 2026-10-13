import { FaCheckCircle } from "react-icons/fa";
import { MdDoNotDisturbAlt } from "react-icons/md";
import { BiImport } from "react-icons/bi";
import { LiaFileImportSolid } from "react-icons/lia";
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineViewStream } from "react-icons/md";
import { TfiAnnouncement } from "react-icons/tfi";
import { IoStatsChart } from "react-icons/io5";
import { FaBell, FaLightbulb } from "react-icons/fa";

const fullWidth =
  "mb-1 flex w-full items-center rounded border border-neutral-300 bg-neutral-100 px-3 py-1.5 text-left text-sm";

export default function CourseStatus() {
  return (
    <div id="wd-course-status">
      <h2 className="mb-3 text-xl font-semibold">Course Status</h2>
      <div className="mb-1 flex gap-1">
        <button
          type="button"
          className="inline-flex min-w-0 flex-1 items-center justify-center rounded border border-neutral-300 bg-neutral-100 px-2 py-1.5 text-sm"
        >
          <MdDoNotDisturbAlt className="me-1 shrink-0 text-base" /> Unpublish
        </button>
        <button
          type="button"
          className="inline-flex min-w-0 flex-1 items-center justify-center rounded bg-green-600 px-2 py-1.5 text-sm text-white"
        >
          <FaCheckCircle className="me-1 shrink-0 text-base" /> Publish
        </button>
      </div>
      <button type="button" className={fullWidth}>
        <BiImport className="me-2 text-base" /> Import Existing Content
      </button>
      <button type="button" className={fullWidth}>
        <LiaFileImportSolid className="me-2 text-base" /> Import from Commons
      </button>
      <button type="button" className={fullWidth}>
        <IoHomeOutline className="me-2 text-base" /> Choose Home Page
      </button>
      <button type="button" className={fullWidth}>
        <MdOutlineViewStream className="me-2 text-base" /> View Course Stream
      </button>
      <button type="button" className={fullWidth}>
        <TfiAnnouncement className="me-2 text-base" /> New Announcement
      </button>
      <button type="button" className={fullWidth}>
        <IoStatsChart className="me-2 text-base" /> New Analytics
      </button>
      <button type="button" className={fullWidth}>
        <FaBell className="me-2 text-base" /> View Course Notifications
      </button>
      <button type="button" id="wd-ai-status" className={fullWidth}>
        <FaLightbulb className="me-2 text-base" /> Sample action
      </button>
    </div>
  );
}
