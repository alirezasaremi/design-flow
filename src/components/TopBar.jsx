import React from "react";
import BrandIcon from "./svg/BrandIcon";
import Viewports from "../constants/ViewportTypes";
import { useDispatch, useSelector } from "react-redux";
import { viewportManagerActions } from "../store/slices/viewportManager";

const TopBar = () => {

  const viewports = useSelector(state => state.viewportManager);
  const dipatch = useDispatch();

  const changeViewportHandler = (view) => {
    dipatch(viewportManagerActions.switchViewport({view: view}))
  }
  
  return (
    <div className="flex justify-between">
      <div className="flex justify-start items-center">
        <div>
          <BrandIcon color="#f43f5e" />
        </div>
        <div
          style={{ fontFamily: "Pacifico" }}
          className="ml-1 bg-gradient-to-r from-rose-500 to-violet-500 text-transparent bg-clip-text prose prose-lg"
        >
          DesignFlow
        </div>
      </div>
      <div className="flex justify-end gap-1">
        {viewports.map((item) => {
          return (
            <button
              key={item.name}
              type="button"
              className={`${item.active ? 'bg-slate-900' : 'bg-slate-800'} hover:bg-slate-900 p-2 rounded`}
              onClick={()=>{changeViewportHandler(item.name)}}
            >
              {item.icon}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default TopBar;
