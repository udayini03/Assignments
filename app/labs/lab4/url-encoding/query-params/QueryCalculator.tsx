"use client";

import { useSearchParams } from "next/navigation";

export default function QueryCalculator() {
  const searchParams = useSearchParams();
  const aRaw = searchParams.get("a") || "0";
  const bRaw = searchParams.get("b") || "0";
  const cRaw = searchParams.get("c");
  const dRaw = searchParams.get("d");
  const a = parseFloat(aRaw);
  const b = parseFloat(bRaw);
  const c = cRaw ? parseFloat(cRaw) : 0;
  const d = dRaw ? parseFloat(dRaw) : 0;
  const sum = a + b + c + d;
  return (
    <div id="wd-query-calculator">
      <h1>Calculator – Query Parameters</h1>
      <p>Raw query values (already decoded by Next.js):</p>
      <p>
        a = <code>{aRaw}</code>
      </p>
      <p>
        b = <code>{bRaw}</code>
      </p>
      {cRaw !== null && (
        <p>
          c = <code>{cRaw}</code>
        </p>
      )}
      {dRaw !== null && (
        <p>
          d = <code>{dRaw}</code>
        </p>
      )}
      <h2 className="text-green-700">Sum = {sum}</h2>
    </div>
  );
}
