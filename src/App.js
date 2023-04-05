import React, {  useEffect, useState } from "react"
import FormComponent from "./Components/InputForm";
import NewTasksComponent from "./Components/TasksComponent";
import ContextProvider from "./Services/Context/context";
import { GlobalStyle } from "./Services/GlobalStyle/GlobalStyle";
import CreateLocalStorage from "./Services/LocalStorage/localStorage";
import "./style.css"
export default function App (){
  /* const [task, setTask] = useState(JSON.parse(localStorage.getItem('yourTasks')) || []);
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
  } */
  /* useEffect(()=>{
    localStorage.setItem('yourTasks', JSON.stringify(task))
  },[task]) */
  return(
    <>
      <GlobalStyle />
      <ContextProvider>
        <CreateLocalStorage />
        <FormComponent />
        <NewTasksComponent />
      </ContextProvider>
    </>
  )
}