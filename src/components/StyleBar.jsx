import React from "react";
import StyleColors from "../constants/styles/color";

const StyleBar = () => {
  return (
    <div className="w-full mt-4 flex flex-col gap-4">
      <div>
        <h6 className="text-slate-400">Background Color</h6>
        <div className=" bg-slate-700 mt-1 rounded p-2 grid grid-cols-4 gap-4">
          {StyleColors.map((item) => {
            return (
              <div
                key={item.name}
                className={`h-[24px] rounded cursor-pointer ${item.value}`}
                title={item.name}
              />
            );
          })}
        </div>
      </div>
      <div>
        <h6 className="text-slate-400">Typography</h6>
        <div className="bg-slate-700 mt-1 rounded p-2">
          <h1 className="cursor-pointer py-2 hover:text-rose-500 font-bold text-3xl">
            Heading 1
          </h1>
          <h2 className="cursor-pointer py-2 hover:text-rose-500 font-bold text-2xl">
            Heading 2
          </h2>
          <h3 className="cursor-pointer py-2 hover:text-rose-500 font-bold text-xl">
            Heading 3
          </h3>
          <h4 className="cursor-pointer py-2 hover:text-rose-500 font-bold text-lg">
            Heading 4
          </h4>
          <h5 className="cursor-pointer py-2 hover:text-rose-500 font-bold text-sm">
            Heading 5
          </h5>
          <h6 className="cursor-pointer py-2 hover:text-rose-500 font-bold text-xs">
            Heading 6
          </h6>
          <h6 className="cursor-pointer py-2 hover:text-rose-500 text-base">
            Paragraph
          </h6>
        </div>
      </div>
      <div>
        <h6 className="text-slate-400">Border</h6>
        <div className="bg-slate-700 mt-1 rounded p-2 grid grid-cols-4 gap-4">
          <div className="h-[48px] cursor-pointer rounded-none bg-slate-500 border-2 border-slate-950" />
          <div className="h-[48px] cursor-pointer rounded bg-slate-500 border-2 border-slate-950" />
          <div className="h-[48px] cursor-pointer rounded-sm bg-slate-500 border-2 border-slate-950" />
          <div className="h-[48px] cursor-pointer rounded-lg bg-slate-500 border-2 border-slate-950" />
          <div className="h-[48px] cursor-pointer rounded-xl bg-slate-500 border-2 border-slate-950" />
          <div className="h-[48px] cursor-pointer rounded-2xl bg-slate-500 border-2 border-slate-950" />
          <div className="h-[48px] cursor-pointer rounded-3xl bg-slate-500 border-2 border-slate-950" />
        </div>
      </div>
    </div>
  );
};

export default StyleBar;
