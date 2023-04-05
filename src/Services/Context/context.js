import React, {createContext, useState} from "react"

export const Context = createContext({})

export default function ContextProvider ({children}){
    const [inputData, setInputData] = useState()
    const [taskList, setTaskList] = useState()

    return(
        <Context.Provider value={{
            inputData,
            setInputData,
            taskList,
            setTaskList
        }}>
            {children}
        </Context.Provider>
    )
}