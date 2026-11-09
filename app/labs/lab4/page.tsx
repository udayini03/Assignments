"use client";

import Link from "next/link";
import ClickEvent from "./ClickEvent";
import PassingDataOnEvent from "./PassingDataOnEvent";
import PassingFunctions from "./PassingFunctions";
import CounterBroken from "./CounterBroken";
import Counter from "./Counter";
import BooleanStateVariables from "./BooleanStateVariables";
import StringStateVariables from "./StringStateVariables";
import DateStateVariable from "./DateStateVariable";
import ObjectStateVariable from "./ObjectStateVariable";
import ArrayStateVariable from "./ArrayStateVariable";
import ProfileForm from "./profile/ProfileForm";
import ParentStateComponent from "./ParentStateComponent";
import PropDrilling from "./PropDrilling";
import UrlEncoding from "./UrlEncoding";
import ContextExamples from "./context/ContextExamples";
import ZustandExamples from "./zustand/ZustandExamples";
import ReduxExamples from "./redux/ReduxExamples";
import Effect from "./Effect";

export default function Lab4() {
  const sayHello = (message: string) => {
    alert(message);
  };
  const sayMyName = () => {
    alert("I'm Venkata Sai Udayini Vedantham, a CS5610 student from Hyderabad!");
  };
  const sampleFromParent = () => {
    alert("Sample from parent");
  };
  return (
    <div id="wd-lab4" className="flex flex-col gap-4 p-2">
      <h2>Lab 4</h2>
      <p>
        More Lab 4 pages:{" "}
        <Link href="/labs/lab4/url-encoding/query-params?a=5&b=10" id="wd-lab4-query-link">
          Query Calculator (5 + 10)
        </Link>{" "}
        |{" "}
        <Link href="/labs/lab4/url-encoding/path-params/5/10" id="wd-lab4-path-link">
          Path Calculator (5 + 10)
        </Link>{" "}
        |{" "}
        <Link href="/labs/lab4/profile-form" id="wd-lab4-profile-form-link">
          Profile Forms
        </Link>{" "}
        |{" "}
        <Link href="/labs/lab4/hooks" id="wd-lab4-hooks-link">
          Custom Hooks
        </Link>
      </p>
      <ClickEvent />
      <PassingDataOnEvent />
      <PassingFunctions
        theFunction={sayHello}
        message="Hello from Lab 4"
        theNameFunction={sayMyName}
        theOtherFunction={sampleFromParent}
      />
      <CounterBroken />
      <Counter />
      <BooleanStateVariables />
      <StringStateVariables />
      <DateStateVariable />
      <ObjectStateVariable />
      <ArrayStateVariable />
      <ProfileForm />
      <ParentStateComponent />
      <PropDrilling />
      <UrlEncoding />
      <ContextExamples />
      <ZustandExamples />
      <ReduxExamples />
      <Effect />
    </div>
  );
}
