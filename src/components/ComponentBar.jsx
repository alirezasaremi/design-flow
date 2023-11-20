import React from "react";
import preDefinedComponents from "../constants/PreDefinedComponents";
import { useDispatch, useSelector } from "react-redux";
import { componentDraggerActions } from "../store/slices/componentDragger";

const ComponentBar = () => {
  const compDragger = useSelector(state => state.componentDragger);
  const dispatch = useDispatch();

  const handleDrag = (e, item) => {
    dispatch(componentDraggerActions.setComponent({comp: item}))
  };
  return (
    <div className="w-full mt-4">
      {preDefinedComponents.map((item) => {
        return (
          <div
            key={item.id}
            className="border border-violet-300 w-full rounded p-4 mb-4"
            draggable
            onDragStart={(e) => handleDrag(e, item)}
          >
            {item.name}
          </div>
        );
      })}
    </div>
  );
};

export default ComponentBar;
