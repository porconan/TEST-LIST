import React, {useState} from 'react'

export default function Test1() {
    const [count, setCount] = useState(0)
    const [title, setTitle] = useState("")
    return(
    <div>
        <button 
            onClick={()=> {
                setCount(count + 1);
                setTitle("React Hook");
            }}
        >
            Add
        </button>
        useState : {count}
        <br/>
        Title: {title}
    </div>
    )
}