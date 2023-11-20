import React from "react";

const SimpleComponent = () => {
  return (
      <div className="bg-slate-100 p-2">
        <h1 className="text-center my-2 text-2xl">Component Title</h1>
        <p className="my-4">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam
          nihil corporis officiis temporibus iste maxime deserunt amet, cum,
          animi eligendi incidunt ipsum eos corrupti atque dicta quia delectus,
          vel tempore.
        </p>
        <button type="button" className="bg-sky-600 text-stone-100 p-2 rounded">Click Me!</button>
      </div>
  );
};

export default SimpleComponent;
