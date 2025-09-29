import { useContext, useRef, useState } from "react";
import { BrushContext } from "../context/BrushContext";
import Navbar from "./Navbar";

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

  return (
    <div className="h-screen flex flex-col bg-gray-50">
      {/* Navbar */}
      <Navbar />

      {/* Canvas Area */}
      <div className="flex flex-1 items-center justify-center p-4">
        <div className="bg-white shadow-2xl rounded-2xl p-4">
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
    </div>
  );
};

export default WhiteBoard;
