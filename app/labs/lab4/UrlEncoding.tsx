"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const input = "mb-2 block w-full rounded border border-neutral-300 px-3 py-1.5";
const greenButton = "mb-2 w-full rounded bg-green-600 px-3 py-1.5 text-sm font-medium text-white";
const blueLink = "mb-2 block w-full rounded bg-blue-600 px-3 py-1.5 text-center text-sm font-medium text-white no-underline";

export default function UrlEncoding() {
  const [a, setA] = useState("5");
  const [b, setB] = useState("10");
  const [c, setC] = useState("7");
  const [d, setD] = useState("2");
  const router = useRouter();
  const baseUrl = "/labs/lab4/url-encoding";

  const goToQueryVersion = () => {
    const params = new URLSearchParams();
    params.set("a", a);
    params.set("b", b);
    params.set("c", c);
    params.set("d", d);
    router.push(`${baseUrl}/query-params?${params.toString()}`);
  };

  const goToPathVersion = () => {
    const safeA = encodeURIComponent(a);
    const safeB = encodeURIComponent(b);
    router.push(`${baseUrl}/path-params/${safeA}/${safeB}`);
  };

  const goToThreePathVersion = () => {
    router.push(
      `${baseUrl}/path-params/${encodeURIComponent(a)}/${encodeURIComponent(b)}/${encodeURIComponent(c)}`,
    );
  };

  return (
    <div id="wd-url-encoding" className="max-w-xl">
      <h2>Addition Calculator</h2>
      <p>
        Enter numbers and navigate using either buttons (programmatic) or
        links (declarative):
      </p>
      <input type="number" value={a} onChange={(e) => setA(e.target.value)} className={input} id="wd-url-a" />
      <input type="number" value={b} onChange={(e) => setB(e.target.value)} className={input} id="wd-url-b" />
      <label htmlFor="wd-url-c" className="text-sm">My third number c</label>
      <input type="number" value={c} onChange={(e) => setC(e.target.value)} className={input} id="wd-url-c" />
      <label htmlFor="wd-url-d" className="text-sm">Sample extra number d (query only)</label>
      <input type="number" value={d} onChange={(e) => setD(e.target.value)} className={`${input} mb-3`} id="wd-url-d" />
      <h4>Programmatic navigation (using router.push):</h4>
      <button type="button" onClick={goToQueryVersion} className={greenButton} id="wd-url-query-programmatic">
        {a} + {b} + {c} + {d} → Query Params (programmatic)
      </button>
      <button type="button" onClick={goToPathVersion} className={greenButton} id="wd-url-path-programmatic">
        {a} + {b} → Path Params (programmatic)
      </button>
      <button type="button" onClick={goToThreePathVersion} className={`${greenButton} mb-3`} id="wd-url-path-c-programmatic">
        {a} + {b} + {c} → Path Params (programmatic)
      </button>
      <h4>Declarative navigation (using Link):</h4>
      <Link
        href={`${baseUrl}/query-params?a=${encodeURIComponent(a)}&b=${encodeURIComponent(b)}`}
        className={blueLink}
        id="wd-url-query-link"
      >
        {a} + {b} → Query Params (Link)
      </Link>
      <Link
        href={`${baseUrl}/query-params?a=${encodeURIComponent(a)}&b=${encodeURIComponent(b)}&c=${encodeURIComponent(c)}&d=${encodeURIComponent(d)}`}
        className={blueLink}
        id="wd-url-query-c-link"
      >
        {a} + {b} + {c} + {d} → Query Params (Link)
      </Link>
      <Link
        href={`${baseUrl}/path-params/${encodeURIComponent(a)}/${encodeURIComponent(b)}`}
        className={blueLink}
        id="wd-url-path-link"
      >
        {a} + {b} → Path Params (Link)
      </Link>
      <Link
        href={`${baseUrl}/path-params/${encodeURIComponent(a)}/${encodeURIComponent(b)}/${encodeURIComponent(c)}`}
        className={blueLink}
        id="wd-url-path-c-link"
      >
        {a} + {b} + {c} → Path Params (Link)
      </Link>
      <hr />
    </div>
  );
}
