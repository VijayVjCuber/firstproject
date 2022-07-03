import React, {Component} from "react";
import {ThemeContext} from "./App";

export default class Counter extends Component{
    constructor(props){
        super(props)

        this.state={
            count: props.initialCount
        }
    }


    changeCount(num){
        this.setState(prevState=>{
            return{count: prevState.count+num}
        })
    }

    render(){
        return(
            <ThemeContext.Consumer>
                {styles=>(
                    <div>
                        <button style={styles} onClick={()=>this.changeCount(-1)}>-</button>
                        <span>{this.state.count}</span>
                        <button style={styles} onClick={()=>this.changeCount(1)}>+</button>
                    </div>
                )}
            </ThemeContext.Consumer>
        )
    }
}