import { useContext } from "react";
import { Eraser } from "../utils/icon/icons";
import { BrushContext } from "../context/BrushContext";

const Navbar = () => {
  const { setbrush, setColor, setEraser } = useContext(BrushContext);

  return (
    <div className="flex items-center justify-between h-20 bg-white text-black w-full max-w-[900px] m-auto mt-5 px-6 rounded-xl shadow-lg py-6">
      {/* Title */}
      <h1 className="font-bold text-xl tracking-wide">FreeHand</h1>

   

      {/* Color Picker + Brush Sizes */}
      <div className="flex items-center gap-4">
        {/* Color Picker */}
        <input
          type="color"
          className="w-8 h-8 cursor-pointer rounded-md overflow-hidden border border-gray-300"
          onChange={(e) => setColor(e.target.value)}
        />

        {/* Quick Brush Sizes */}
        <div className="flex gap-2 items-center">
          <button
            onClick={() => {setbrush(2); setEraser(false)}}
            className="w-6 h-6 rounded-full bg-gray-700 hover:ring-2 hover:ring-gray-400"
            title="Small"
          ></button>
          <button
            onClick={() => {setbrush(8); setEraser(false)}}
            className="w-8 h-8 rounded-full bg-gray-700 hover:ring-2 hover:ring-gray-400"
            title="Medium"
          ></button>
          <button
            onClick={() => {setbrush(14); setEraser(false)}}
            className="w-10 h-10 rounded-full bg-gray-700 hover:ring-2 hover:ring-gray-400"
            title="Large"
          ></button>
        </div>

        <button
       className="p-2 rounded-lg hover:bg-gray-100 transition"
       onClick={() => setEraser(true) }
       title="Eraser"
       >
  <Eraser className="w-7 h-7 text-gray-700" />
</button>

      </div>
    </div>
  );
};

export default Navbar;
