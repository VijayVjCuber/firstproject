import React, {useState} from "react";
import Counter from "./Counter";
import CounterHooks from "./CounterHooks";

export const ThemeContext = React.createContext()


function App(){

    const[theme, setTheme] = useState('red')

    function changeTheme(){
        setTheme(prevTheme=>{
            return prevTheme==='red' ? 'blue' : 'red'
        })
    }

    return(
        <ThemeContext.Provider value={{backgroundColor:theme}}>
            <Counter initialCount={5}/>
            <CounterHooks initialCount={10}/>
            <button onClick={()=>changeTheme()}>Change Theme</button>
        </ThemeContext.Provider>
    )
}

export default App;