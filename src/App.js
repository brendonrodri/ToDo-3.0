import React, {  useEffect, useState } from "react"
import FormComponent from "./Components/InputForm";
import ContextProvider from "./Services/Context/context";
import "./style.css"
export default function App (){
  const [task, setTask] = useState(JSON.parse(localStorage.getItem('yourTasks')) || []);
  const [input, setInput] = useState()
  const addTask = () =>{
    if(!input){
      return
    }else{
      setTask([...task, {id: Math.random(), nome: input, done: false }])
    }
    setInput("")
  }
  const checked = (id) => {
    const changeDone = task.map((item)=>{
      if(id === item.id){
        return{...item, done: !item.done
        }
      }
      return item
    })
    setTask(changeDone)
    console.log(task)
  }
  const removeTask = (id)=>{
    let delTask = task.filter((item)=> item.id !== id)
    setTask(delTask)
  }
  useEffect(()=>{
    localStorage.setItem('yourTasks', JSON.stringify(task))
  },[task])
  return(
    <ContextProvider>
      <FormComponent />
      {/* <form onSubmit={e=> e.preventDefault()}>
      <input onChange={e=>setInput(e.target.value)} value={input} />
      <button onClick={()=>{
        addTask()
      }}> Add</button>
      <ul>
        {task.map((item)=>(
          <>
            <li>{item.nome}</li>
            <input type="checkbox" onClick={()=>{ checked(item.id)}} />
            <button onClick={()=>{removeTask(item.id)}}>Del</button>
          </> 
        ))}
      </ul>
    </form> */}
    </ContextProvider>
    
  )
}