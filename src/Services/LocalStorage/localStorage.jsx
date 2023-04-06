import {useContext, useEffect} from "react"
import { Context } from "../Context/context"
const CreateLocalStorage = ()=>{
    const {taskList} = useContext(Context)
    useEffect(()=>{
        localStorage.setItem('taskData', JSON.stringify(taskList))
    }, [taskList])
    return true
}
export default CreateLocalStorage;