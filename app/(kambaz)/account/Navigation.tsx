"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AccountNavigation() {
  const pathname = usePathname() ?? "";
  const links = [
    { label: "Signin", path: "/account/signin" },
    { label: "Signup", path: "/account/signup" },
    { label: "Profile", path: "/account/profile" },
  ];
  return (
    <div id="wd-account-navigation" className="wd list-group rounded-none">
      {links.map((link) => (
        <Link
          key={link.path}
          href={link.path}
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
