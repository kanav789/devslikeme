import { createContext, useState } from "react";

export const BrushContext = createContext();

export function BrushProvider({children,}){
const [brush, setbrush]=useState(5)
const [color,setColor] = useState("black")
const [eraser, setEraser] = useState(false)
const [rectangle, setRectangle] = useState(false)
const [stext, setStext] = useState(false)

   return(
        <BrushContext.Provider value={{brush, setbrush, color, setColor, eraser, setEraser, rectangle, setRectangle, stext, setStext}}>
            {children}
        </BrushContext.Provider>
    )

}