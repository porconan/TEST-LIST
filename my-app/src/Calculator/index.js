import React,{useState} from "react"

function Calculator(){
    const [value1,setValue1]= useState("")
    const [value2,setValue2]= useState("")
    const [operator,setOperator]= useState("")

    // function cal(){
    //     const result =  calc(value1,operator,value2);
    //     return result;
    // }

    return(
        <div>
            <input type="text" value={value1} onChange={(e) => setValue1(e.target.value)}/>
            <select 
                value={operator}
                onChange={(e) => setOperator(e.target.value)}
            >
                <option value={"+"}>&#43;</option>
                <option value={"-"}>&#8722;</option>
                <option value={"*"}>&#215;</option>
                <option value={"/"}>&#247;</option>
            </select>
            <input type="text" value={value2} onChange={(e) => setValue2(e.target.value)}/>
            <button  
                type="submit"
                onClick={cal}
            >
                =
            </button>
            {/* <label>{cal()}</label> */}
        </div>
    );

}export default Calculator;