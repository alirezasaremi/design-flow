import { useState } from "react";
import ComponentBar from "./components/ComponentBar";
import StyleBar from "./components/StyleBar";
import TopBar from "./components/TopBar";
import ViewPort from "./components/ViewPort";

const App = () => {
  const [showStyle, setShowStyle] = useState(false);
  const switchPanel = () => {
    if (showStyle) {
      setShowStyle(false);
      return;
    }
    setShowStyle(true);
  };

  return (
    <div className="bg-slate-800 text-white">
      <div className="h-16 bg-slate-800 border-b border-b-slate-900 pt-3 pb-4 px-4 sticky top-0 ">
        <TopBar />
      </div>
      <div className="flex">
        <div className="w-1/5 bg-slate-800 border-r border-r-slate-900 h-screen">
          <div className="flex justify-between">
            <button
              type="button"
              className={`w-full py-4 ${
                !showStyle ? "bg-rose-500" : "bg-rose-800"
              }`}
              onClick={switchPanel}
            >
              Components
            </button>
            <button
              type="button"
              className={`w-full py-4 ${
                showStyle ? "bg-rose-500" : "bg-rose-800"
              }`}
              onClick={switchPanel}
            >
              Style
            </button>
          </div>
          <div className="px-4">
            {showStyle ? <StyleBar /> : <ComponentBar />}
          </div>
        </div>
        <div className="w-4/5 p-4 bg-gray-300 text-slate-800">
          <ViewPort onComponentClick={switchPanel} />
        </div>
      </div>
    </div>
  );
};

export default App;
