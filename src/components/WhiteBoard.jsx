import { useContext, useRef, useState } from "react";
import { BrushContext } from "../context/BrushContext";
import Navbar from "./Navbar";
import { Share } from "../utils/icon/icons";

const WhiteBoard = () => {
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [lastPos, setLastPos] = useState({ x: 0, y: 0 });

  const { brush, color, eraser } = useContext(BrushContext);

  const startDrawing = (e) => {
    setIsDrawing(true);
    setLastPos({
      x: e.nativeEvent.offsetX,
      y: e.nativeEvent.offsetY,
    });
  };

  const draw = (e) => {
    if (!isDrawing) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const x = e.nativeEvent.offsetX;
    const y = e.nativeEvent.offsetY;

    ctx.beginPath();
    ctx.lineWidth = eraser ? 50 : brush;
    ctx.lineCap = "round";
    ctx.strokeStyle = eraser ? "white" : color;
    ctx.moveTo(lastPos.x, lastPos.y);
    ctx.lineTo(x, y);
    ctx.stroke();

    setLastPos({ x, y });
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };

  const downloadcanvas =() =>{
 const canvas = canvasRef.current;


  // Create a temporary canvas to preserve original
  const tempCanvas = document.createElement("canvas");
  tempCanvas.width = canvas.width;
  tempCanvas.height = canvas.height;
  const tempCtx = tempCanvas.getContext("2d");

  // Fill white background
  tempCtx.fillStyle = "white";
  tempCtx.fillRect(0, 0, tempCanvas.width, tempCanvas.height);

  // Draw original canvas on top
  tempCtx.drawImage(canvas, 0, 0);

  const link = document.createElement("a");
    link.href = tempCanvas.toDataURL("image/png")
    link.download = "whiteboard.png"
    link.click();
  }

  return (
   <div className="h-screen flex flex-col bg-gray-50 relative">
  {/* Navbar */}
  <Navbar />

  {/* Grid Background Pattern */}
  <div
    className="absolute inset-0 z-0 pointer-events-none"
    style={{
      backgroundImage: `
        repeating-linear-gradient(0deg, transparent, transparent 5px, rgba(75, 85, 99, 0.06) 5px, rgba(75, 85, 99, 0.06) 6px, transparent 6px, transparent 15px),
        repeating-linear-gradient(90deg, transparent, transparent 5px, rgba(75, 85, 99, 0.06) 5px, rgba(75, 85, 99, 0.06) 6px, transparent 6px, transparent 15px),
        repeating-linear-gradient(0deg, transparent, transparent 10px, rgba(107, 114, 128, 0.04) 10px, rgba(107, 114, 128, 0.04) 11px, transparent 11px, transparent 30px),
        repeating-linear-gradient(90deg, transparent, transparent 10px, rgba(107, 114, 128, 0.04) 10px, rgba(107, 114, 128, 0.04) 11px, transparent 11px, transparent 30px)
      `,
    }}
  />

  {/* Canvas Area */}
  <div className="flex flex-1 items-center justify-center p-4 relative z-10">
    <div className="bg-white shadow-2xl rounded-2xl p-6" 
    >
      <canvas
        ref={canvasRef}
        width={1200}
        height={600}
        className="border border-gray-300 rounded-lg cursor-crosshair"
        onMouseDown={startDrawing}
        onMouseMove={draw}
        onMouseUp={stopDrawing}
        onMouseLeave={stopDrawing}
      />
    </div>
  </div>

  {/* Export Button */}
  <div className="absolute bottom-7 right-10 z-20">
    <button
      className="bg-black rounded-full w-12 h-12 text-white text-2xl flex items-center justify-center hover:bg-gray-800 transition shadow-lg"
      onClick={() => downloadcanvas()}
    >
      <Share />
    </button>
  </div>
</div>
  );
};

export default WhiteBoard;
