import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPercentageBetweenTwoNumbers } from "../helper";
import { componentDraggerActions } from "../store/slices/componentDragger";

const ViewPort = () => {
  const viewports = useSelector((state) => state.viewportManager);
  const compDragger = useSelector((state) => state.componentDragger);
  const dispatch = useDispatch();

  const parentRef = useRef(null);

  const [parentWidth, setParentWidth] = useState(0);
  const [activeViewport, setActiveViewport] = useState();
  const [zoomPercent, setZoomPercent] = useState();
  const [compWrapper, setCompWrapper] = useState([]);

  const handleDrop = (e) => {
    if (compDragger) {
      setCompWrapper([...compWrapper, compDragger]);
    }
  };

  useEffect(() => {
    if (compWrapper) {
      dispatch(componentDraggerActions.removeComponent());
    }
  }, [compWrapper]);

  useEffect(() => {
    const vp = viewports.filter((item) => item.active)[0];
    setActiveViewport(vp);
  }, [viewports]);

  useEffect(() => {
    setParentWidth(parentRef.current ? parentRef.current.offsetWidth : 0);
  }, [parentRef.current]);

  useEffect(() => {
    if (activeViewport && parentWidth > 0) {
      const p = getPercentageBetweenTwoNumbers(
        activeViewport.width,
        parentWidth
      );
      if (p > 100) {
        setZoomPercent();
      } else {
        setZoomPercent(p);
      }
    }
  }, [parentWidth, activeViewport]);

  return (
    <div className="flex flex-col items-center h-screen" ref={parentRef}>
      {activeViewport && parentWidth > 0 && (
        <>
          <div className="text-center props prose-sm text-gray-500">
            {activeViewport.width}px{" "}
            {zoomPercent && <span>- {zoomPercent.toFixed(2)}%</span>}
          </div>

          <div
            className="border border-gray-500 p-1 rounded-lg h-full"
            style={{
              width: `${
                zoomPercent ? zoomPercent + "%" : activeViewport.width + "px"
              }`,
            }}
            onDrop={handleDrop}
            onDragOver={(e) => {
              e.preventDefault();
            }}
          >
            {compWrapper.length === 0 && (
              <h3 className="pt-6 text-center text-gray-500">
                Drag a component from left panel and drop here!
              </h3>
            )}

            {compWrapper &&
              compWrapper.map((item, index) => {
                return <div key={index}>{item.component}</div>;
              })}
          </div>
        </>
      )}
    </div>
  );
};

export default ViewPort;
