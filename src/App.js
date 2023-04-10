import React from "react"
import HeaderComponent from "./Components/HeaderComponent";
import FormComponent from "./Components/InputForm";
import NewTasksComponent from "./Components/TasksComponent";
import ContextProvider from "./Services/Context/context";
import { GlobalStyle } from "./Services/GlobalStyle/GlobalStyle";
import CreateLocalStorage from "./Services/LocalStorage/localStorage";
import "./style.css"
export default function App (){
  return(
    <>
      <GlobalStyle />
      <ContextProvider>
        <CreateLocalStorage />
        <HeaderComponent />
        <FormComponent />
        <NewTasksComponent />
      </ContextProvider>
    </>
  )
}