import { useContext, useEffect } from "react";
import { Brush } from "../utils/icon/icons";
import { BrushContext } from "../context/BrushContext";

const Navbar =() =>{

    const {brush, setbrush, color, setColor} =useContext(BrushContext)
      
    useEffect(()=>{

        setbrush("simple")
        setColor("black")
    }, [])
     


    console.log(brush,color ,"navbar")
    return(
        <div className="flex items-center justify-center h-20  text-white width-full max-w-[700px] m-auto mt-5 rounded-xl shadow-xl">

        <div className="flex justify-between items-center w-full px-5">
            <h1 className="text-black font-bold text-lg ">WhiteBoard</h1>
             
             <div>
                <button>
                    <Brush/>
                </button>

                
             </div>
 
 

            </div> 
        

        </div>
    )
}

export default Navbar;