"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const LINKS = [
  { href: "/labs", id: "wd-home-link", label: "Home", match: (p: string) => p === "/labs" },
  { href: "/labs/lab1", id: "wd-toc-lab1-link", label: "Lab 1", match: (p: string) => p.startsWith("/labs/lab1") },
  { href: "/labs/lab2", id: "wd-toc-lab2-link", label: "Lab 2", match: (p: string) => p.startsWith("/labs/lab2") },
  { href: "/labs/lab3", id: "wd-toc-lab3-link", label: "Lab 3", match: (p: string) => p.startsWith("/labs/lab3") },
  { href: "/labs/lab4", id: "wd-toc-lab4-link", label: "Lab 4", match: (p: string) => p.startsWith("/labs/lab4") },
  { href: "/labs/lab5", id: "wd-toc-lab5-link", label: "Lab 5", match: (p: string) => p.startsWith("/labs/lab5") },
  { href: "/", id: "wd-kambaz-link", label: "Kambaz", match: () => false },
  { href: "https://kambaz.dev/book/ch1", id: "wd-toc-book-link", label: "Chapter 1", match: () => false },
  { href: "https://kambaz.dev/book/ch3", id: "wd-book-ch3-link", label: "Book Ch3", match: () => false },
] as const;

const activeStyle = {
  backgroundColor: "#2563eb",
  color: "white",
  borderRadius: "4px",
  padding: "2px 8px",
  textDecoration: "none",
};

export default function TOC() {
  const pathname = usePathname() ?? "";
  return (
    <div id="wd-toc">
      <ul>
        {LINKS.map((link) => {
          const active = link.match(pathname);
          return (
            <li key={link.id}>
              <Link
                href={link.href}
                id={link.id}
                style={active ? activeStyle : undefined}
                aria-current={active ? "page" : undefined}
              >
                {link.label}
              </Link>
            </li>
          );
        })}
      </ul>
      <div id="wd-toc-personal">
        <strong>Udayini Vedantham</strong>
        <br />
        <em>Fake it till you make it. If you believe you can, you will do it</em>
      </div>
    </div>
  );
}
