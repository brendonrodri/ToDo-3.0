import React, {createContext, useState} from "react"
export const Context = createContext({})
export default function ContextProvider ({children}){
    const [taskList, setTaskList] = useState(JSON.parse(localStorage.getItem('taskData')) || []);
    return(
        <Context.Provider value={{
            taskList,
            setTaskList
        }}>
            {children}
        </Context.Provider>
    )
}