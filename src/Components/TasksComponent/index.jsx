import React from "react"
import * as S from "./style"
import { IconContext } from "react-icons"
import {FaTrashAlt} from "react-icons/fa"
import { Context } from "../../Services/Context/context"
export default function  NewTasksComponent (){
    const {taskList, setTaskList} = React.useContext(Context)
    const delTask = (id)=>{
        let del = taskList.filter((item)=> item.id !== id)
        setTaskList(del)
      }
    return(
        <S.TasksContainer>
            {taskList.map((item)=>(
                <S.TaskCard>
                    <S.TaskItem>{item.task}</S.TaskItem>
                    <S.ButtonsContainer>
                        <S.DelButton onClick={()=>{
                            delTask(item.id)
                            console.log('click')
                        }}> 
                            <IconContext.Provider value={{size: "1.5rem"}}>
                                <FaTrashAlt />
                            </IconContext.Provider> 
                        </S.DelButton>
                    </S.ButtonsContainer>
                </S.TaskCard>           
            ))}
        </S.TasksContainer>
    )
}
