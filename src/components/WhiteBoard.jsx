import { useRef, useState } from "react";

const WhiteBoard =()=>{

    const canavaref =useRef()
    const ctx = canavaref.current?.getContext("2d")
    const [isDrawing,setIsDrawing]=useState(false)
    const [lastX,setLastX]=useState({x:0,y:0})
    const color ="black"
    const startdrawing=(e)=>{
      setIsDrawing(true)
      setLastX({x:e.nativeEvent.offsetX,y:e.nativeEvent.offsetY})
    }

    const draw=(e)=>{
        if(!isDrawing) return;
        const x =e.nativeEvent.offsetX
        const y =e.nativeEvent.offsetY
      ctx.beginPath()
      ctx.lineWidth=2
      ctx.moveTo(lastX.x,lastX.y)
      ctx.lineTo(x,y)
      ctx.strokeStyle={color}
        ctx.stroke()

        setLastX({x,y})

    }

    const stopdrawing=()=>{  
        setIsDrawing(false) 
    }

    return(
        <div className="flex flex-col items-center justify-center h-screen">
            <h1>WhiteBoard</h1>
     <canvas width={500} height={500} className="border" ref={canavaref}  onMouseMove={(e)=>{draw(e)}} onMouseDown={startdrawing} onMouseUp={stopdrawing}/>


        </div>
    )
}

export default WhiteBoard;