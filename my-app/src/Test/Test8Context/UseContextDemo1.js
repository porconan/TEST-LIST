import React, { useContext } from "react"
import ThemeContext from "./ThemeContext"

export default function UseContextDemo1(){
    const cc = useContext(ThemeContext);
    return(
        <div>
            <ThemeContext.Consumer>
                {color => 
                    <h1 style={{ color }}>
                        Color is {color}
                    </h1>
                }
            </ThemeContext.Consumer>
            <h2>Load from useContext: {cc}</h2>
        </div>
    )
}