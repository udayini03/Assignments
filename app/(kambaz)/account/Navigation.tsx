"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAccountContext } from "./AccountContext";

export default function AccountNavigation() {
  const { currentUser } = useAccountContext();
  const links = currentUser
    ? ([{ label: "Profile", path: "/account/profile" }] as const)
    : ([
        { label: "Signin", path: "/account/signin" },
        { label: "Signup", path: "/account/signup" },
      ] as const);
  const pathname = usePathname() ?? "";
  return (
    <div id="wd-account-navigation" className="wd list-group rounded-none">
      {links.map((link) => (
        <Link
          key={link.path}
          href={link.path}
          id={`wd-account-${link.label.toLowerCase()}-link`}
          className={
            pathname === link.path
              ? "list-group-item active border-0"
              : "list-group-item border-0 text-red-600"
          }
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
}
