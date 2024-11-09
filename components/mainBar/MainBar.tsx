"use client";
import SwithThem from "../SwithThem";
import { Links } from "./Links";
import SwitchLang from "./SwitchLang";
const MainBar = () => {
  return (
    <div>
      <div className="container max-w-screen-xxl py-1 ">
        <div className="flex justify-end items-center gap-3">
          <Links />
          <SwitchLang />
          <SwithThem />
        </div>
      </div>
      <div className="divider py-0 my-0 h-0"></div>
    </div>
  );
};

export default MainBar;
