import { useContext, useRef, useState } from "react";
import { BrushContext } from "../context/BrushContext";
import Navbar from "./Navbar";
import { Share } from "../utils/icon/icons";

const WhiteBoard = () => {
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [lastPos, setLastPos] = useState({ x: 0, y: 0 });

  const { brush, color, eraser, rectangle, stext  } = useContext(BrushContext);
  

  const startDrawing = (e) => {
    const x = e.nativeEvent.offsetX;
    const y = e.nativeEvent.offsetY;
    setLastPos({ x, y });
    setIsDrawing(true);
    
  };

  const draw = (e) => {
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const x = e.nativeEvent.offsetX;
    const y = e.nativeEvent.offsetY;

    // If rectangle mode is ON
    if (rectangle) {
      // Clear preview
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Optional: store previous drawings (for now skip)
      // You can later store drawings in an array for persistence

      drawRectangle(ctx, lastPos, { x, y }, color);
 // Reset rectangle mode after drawing one
     return; 
    }

    // Default: freehand drawing
    ctx.beginPath();
    ctx.lineWidth = eraser ? 50 : brush;
    ctx.lineCap = "round";
    ctx.strokeStyle = eraser ? "white" : color;
    ctx.moveTo(lastPos.x, lastPos.y);
    ctx.lineTo(x, y);
    ctx.stroke();

    setLastPos({ x, y });
  };



  const stopDrawing = () => setIsDrawing(false);

  const drawRectangle = (ctx, start, end, color, fill = false) => {
    const width = end.x - start.x;
    const height = end.y - start.y;

    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = brush;
    ctx.rect(start.x, start.y, width, height);
    fill ? ctx.fill() : ctx.stroke();
  };

  const text =(ctx, text, position, color, font = "20px Arial") =>{
    ctx.fillStyle = color;
    ctx.font = font;
    ctx.fillText(text, position.x, position.y);
    ctx.textBaseline = "top";
  }

  const handleClick =(e) =>{
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const x = e.nativeEvent.offsetX;
    const y = e.nativeEvent.offsetY;
    text(ctx, {x, y}, color);
    const usertext = prompt("Enter your text:");
    if(usertext){
      text(ctx, usertext, {x, y}, color);
    }
  }

  const downloadcanvas = () => {
    const canvas = canvasRef.current;
    const tempCanvas = document.createElement("canvas");
    tempCanvas.width = canvas.width;
    tempCanvas.height = canvas.height;
    const tempCtx = tempCanvas.getContext("2d");

    tempCtx.fillStyle = "white";
    tempCtx.fillRect(0, 0, tempCanvas.width, tempCanvas.height);
    tempCtx.drawImage(canvas, 0, 0);

    const link = document.createElement("a");
    link.href = tempCanvas.toDataURL("image/png");
    link.download = "whiteboard.png";
    link.click();
  };

  return (
    <div className="h-screen flex flex-col bg-gray-50 relative">
      {/* Navbar */}
      <Navbar />

      {/* Grid Background */}
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
        <div className="bg-white shadow-2xl rounded-2xl p-6">
          <canvas
            ref={canvasRef}
            width={1200}
            height={600}
            className="border border-gray-300 rounded-lg cursor-crosshair"
            onMouseDown={stext ? handleClick : startDrawing}
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
          onClick={downloadcanvas}
        >
          <Share />
        </button>
      </div>
    </div>
  );
};

export default WhiteBoard;
