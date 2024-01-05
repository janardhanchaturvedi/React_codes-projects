import { useState } from "react";
import "./App.css";

import Card from "./Card";
function App() {
  let [color , SetColor] = useState("black")
  return (
    
      <div className="w-full h-full absolute duration-200 m-0 p-0 flex flex-wrap justify-center   "
      style={{backgroundColor : color}}>
        <div className="bg-white-900 absolute rounded-xl  py-4 inset-x-0 bottom-4 px-8 m-20 bg-slate-500">
          <button className="
           text-green-200 px-4 py-2 rounded-lg outline-none mx-3 bg-slate-800 "
           onClick={()=> SetColor("black")}>
                  black
          </button>
          <button className="
           text-green-200 px-4 py-2 rounded-lg outline-none mx-3 bg-lime-500 "
           onClick={()=> SetColor("green")}>
                  green
          </button>
          <button className="
           text-green-200 px-4 py-2 rounded-lg outline-none mx-3 bg-red-500" 
           onClick={()=> SetColor("red")}>
                  red
          </button>
          <button className="
           text-green-200 px-4 py-2 rounded-lg outline-none mx-3 bg-orange-500 "
           onClick={()=> SetColor("orange")}>
                  orange
          </button>
          <button className="
           text-green-200 px-4 py-2 rounded-lg outline-none mx-3 bg-violet-500 " 
           onClick={()=> SetColor("violet")}>
                  violet
          </button>
        </div>
      </div>
    
  );
}

export default App;
