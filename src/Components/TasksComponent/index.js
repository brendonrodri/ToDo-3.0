import React from "react"
import { IconContext } from "react-icons"
import {FaTrashAlt} from "react-icons/fa"
import { Context } from "../../Services/Context/context"

export default function  NewTasksComponent (){
    const {taskList, setTaskList} = React.useContext(Context)
    return(
        <ul>
            {taskList.map((item)=>(
                <>
                    <li>{item.task}</li>
                    <button> 
                        <IconContext.Provider value={{size: "1.5rem"}}>
                            <FaTrashAlt />
                        </IconContext.Provider> 
                    </button>
                </>
               
            ))}
        </ul>
    )
}
