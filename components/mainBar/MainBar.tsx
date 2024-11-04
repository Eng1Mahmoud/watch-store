"use client";
import { Links } from "./Links";
import SwitchLang from "./SwitchLang";
const MainBar = () => {
  return (
    <div>
      <div className="container max-w-screen-xxl py-1 ">
        <div className="flex justify-end items-center gap-1">
          <Links />
          <div className="bg-gray-500 divider-horizontal w-[2px] h-[25px] " />
          <SwitchLang />
        </div>
      </div>
      <div className="divider py-0 my-0 h-0"></div>
    </div>
  );
};

export default MainBar;
