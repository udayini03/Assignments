import type { ReactNode } from "react";
import GreenCheckmark from "./GreenCheckmark";

export default function Module({
  title,
  children,
}: {
  title: string;
  children?: ReactNode;
}) {
  return (
    <li className="wd-module mb-5 overflow-hidden border border-neutral-300">
      <div className="wd-title flex items-center justify-between bg-neutral-200 p-3 font-semibold">
        <span>{title}</span>
        <GreenCheckmark />
      </div>
      <ul className="wd-lessons m-0 list-none p-0">{children}</ul>
    </li>
  );
}
