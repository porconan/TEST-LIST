import React, { useContext, useMemo, useState } from "react"

export default function Test9(){
    const [count, setCount] = useState(1);
    return(
        <div>
           <button onClick={()=> setCount(prev => prev +1)}>
                Increase
           </button>
           <button onClick={()=> setCount(0)}>
                Reset
           </button>
           <Content id={count}/>
        </div>
    )
}

const Content = ({ id }) => {
   console.log("Re-render");
   const handleClick = () => {
       console.log("Click");
   };

    const random = Math.random();

    return(
        <div>
            <h1>UseCallback Demo {id}</h1>
            <button onClick={handleClick}>Test</button>
        </div>
    )
}