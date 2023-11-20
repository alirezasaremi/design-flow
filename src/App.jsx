import ComponentBar from "./components/ComponentBar";
import StyleBar from "./components/StyleBar";
import TopBar from "./components/TopBar";
import ViewPort from "./components/ViewPort";

const App = () => {

  return (
    <div className="bg-slate-800 text-white">
      <div className="h-16 bg-slate-800 border-b border-b-slate-900 pt-3 pb-4 px-4 sticky top-0 ">
        <TopBar />
      </div>
      <div className="flex">
        <div className="w-1/5 bg-slate-800 border-r border-r-slate-900 px-4 h-screen">
          <ComponentBar />
        </div>
        <div className="w-4/5 p-4 bg-gray-300 text-slate-800">
          <ViewPort />
        </div>
      </div>
    </div>
  );

};

export default App;
