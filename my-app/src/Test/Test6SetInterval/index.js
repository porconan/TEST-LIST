import React, {useState,useEffect} from 'react'

export default function Test5() {
    
    const [count, setCount]=useState(0);
    const doSomeThing= ()=>{
        setCount(previus => previus + 1)
        console.log("Do something")
    }

    useEffect( () => {
        //Call whenever start is changed
        const intervalId = setInterval(doSomeThing, 1000)

        return() =>{
            //Cleanup
            console.log("Destroyed")
            clearInterval(intervalId) 
        };
    },[])

    return(
        <div>
            <h1>{count}</h1>
        </div>
    )
}