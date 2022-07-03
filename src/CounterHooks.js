import React, {useState} from "react";
import { useContext } from "react";
import { ThemeContext } from "./App";

export default function CounterHooks({initialCount}){
    const[count, setCount]=useState(initialCount)
    const style = useContext(ThemeContext)

    function changeCount(num){
        setCount(prevCount=>{
            return(prevCount+num)
        }
        )
    }

    return(
        <div>
            <button style={style} onClick={()=>changeCount(-1)}>-</button>
            <span>{count}</span>
            <button style={style} onClick={()=>changeCount(1)}>+</button>
        </div>
    )
}