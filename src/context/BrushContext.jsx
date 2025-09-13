import { createContext, useState } from "react";

export const BrushContext = createContext();

export function BrushProvider({children,}){
const [brush, setbrush]=useState("")
const [color,setColor] = useState("")
    return(
        <BrushContext.Provider value={({brush, setbrush, color, setColor})}>
            {children}
        </BrushContext.Provider>
    )

}