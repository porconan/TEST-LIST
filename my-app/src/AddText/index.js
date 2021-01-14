import React,{useState} from "react"

function Calculator(){
    const [value,setValue]= useState("");
    const [valueList,setValueList] = useState([]);

    return(
        <div style={{padding:"10px"}}>
            <p>#Debug {JSON.stringify(value)}</p>
            <input type="text" 
                value={value} 
                onChange={(e) => setValue(e.target.value)}
            /> 
            <button  
                type="button"
                onClick={e => {
                    e.preventDefault();
                    setValueList([valueList,value])}}
            >
                submit
            </button>
            <p>
                {valueList}
            </p>
        </div>
    );

}export default Calculator;