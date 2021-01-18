import React, {useState,useEffect} from 'react'

export default function Test4() {
    
    const [count, setCount]=useState(0);

    useEffect( () => {
        //Call whenever start is changed
        document.title = "Current count" + count
    },[count])

    return(
        <div>
            <h1>{count}</h1>
            <button onClick={() => setCount(count +1)}>ADD</button>
        </div>
    )
}