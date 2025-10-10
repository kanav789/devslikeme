import { useContext } from "react";
import { Eraser, Rectangle, TextIcon } from "../utils/icon/icons";
import { BrushContext } from "../context/BrushContext";

const Navbar = () => {
  const { setbrush, setColor, setEraser, setRectangle, setStext } = useContext(BrushContext);

  return (
    <div className="flex items-center justify-between h-20 bg-white text-black w-full max-w-[900px] m-auto mt-5 px-6 rounded-xl shadow-lg py-6">
    

   

      {/* Color Picker + Brush Sizes */}
      <div className="flex items-center gap-4">
       {/* tools  */}
      <div className="flex gap-2 items-center">
        {/* <button
          className="p-2 rounded-lg hover:bg-gray-100 transition"
         onClick={() => {setRectangle(true); setEraser(false), setStext(false)}}
          title="Reactangle"
        >
          <Rectangle className="w-7 h-7 text-gray-700" />
        </button> */}
         <button
          className="p-2 rounded-lg hover:bg-gray-100 transition"
         onClick={() => {setRectangle(true); setEraser(false), setStext(true)}}
          title="text"
        >
          <TextIcon className="w-7 h-7 text-gray-700" />
        </button>

        </div>
 


        {/* Color Picker */}
        <input
          type="color"
          className="w-8 h-8 cursor-pointer rounded-md overflow-hidden border border-gray-300"
          onChange={(e) => setColor(e.target.value)}
        />

        {/* Quick Brush Sizes */}
        <div className="flex gap-2 items-center">
          <button
            onClick={() => {setbrush(2); setEraser(false), setRectangle(false), setStext(false)}}
            className="w-6 h-6 rounded-full bg-gray-700 hover:ring-2 hover:ring-gray-400"
            title="Small"
          ></button>
          <button
            onClick={() => {setbrush(8); setEraser(false), setRectangle(false), setStext(false)}}
            className="w-8 h-8 rounded-full bg-gray-700 hover:ring-2 hover:ring-gray-400"
            title="Medium"
          ></button>
          <button
            onClick={() => {setbrush(14); setEraser(false), setRectangle(false), setStext(false)}}
            className="w-10 h-10 rounded-full bg-gray-700 hover:ring-2 hover:ring-gray-400"
            title="Large"
          ></button>
        </div>

        <button
       className="p-2 rounded-lg hover:bg-gray-100 transition"
       onClick={() => {setEraser(true); setRectangle(false), setStext(false)}}
       title="Eraser"
       >
  <Eraser className="w-7 h-7 text-gray-700" />
</button>

      </div>
    </div>
  );
};

export default Navbar;
