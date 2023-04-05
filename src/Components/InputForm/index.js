import React, { useContext } from "react"
import { Context } from "../../Services/Context/context"
export default function FormComponent(){
    const {inputData, setInputData} = useContext(Context)
    const addTask = (e)=>{
        setInputData(e.target.value)
    }
    return(
        <form>
            <input value={inputData} onChange={()=>{
                addTask()
            }}/>
            <button> add </button>
        </form>
    )
}