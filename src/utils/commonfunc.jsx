import { useContext } from "react";
import { BrushContext } from "../context/BrushContext";

const { brush, color, eraser } = useContext(BrushContext)
export const drawRectangle =(start, end , ctx, color, fill = false) =>{
  
  const width = end.x - start.x;
  const height = end.y - start.y;

  ctx.beginPath();
  ctx.strokeStyle = color;
  ctx.rect(start.x, start.y, width, height);

  if (fill) ctx.fillStyle = color;
  fill ? ctx.fill() : ctx.stroke();
  

}