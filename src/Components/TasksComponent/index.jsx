import React from "react"
import * as S from "./style"
import {IconContext} from "react-icons"
import {FaTrashAlt} from "react-icons/fa"
import {AiOutlineCheck} from "react-icons/ai"
import {Context} from "../../Services/Context/context"
import TitleComponent from "../BarTitle"
const ListCards = () =>{
    const {taskList, setTaskList} = React.useContext(Context)
    const delTask = (id)=>{
        let del = taskList.filter((item)=> item.id !== id)
        setTaskList(del)
    }
    const doneTask = (id)=>{
        let done = taskList.map((item)=>{
            if(item.id === id){
                return {...item, done: !item.done}
            }
            return item
        })
        setTaskList(done)
    }
   
    return (
        <>
            {taskList.map((item)=>(
                <S.TaskCard>
                    <S.TaskTitle>{item.title}</S.TaskTitle>
                    <S.TaskDescription>{item.description}</S.TaskDescription>
                    <S.TasksDateContainer>
                        <S.DateTime>Dia: {item.date}, hora: {item.time}</S.DateTime>
                        <S.Local>{item.local}</S.Local>
                    </S.TasksDateContainer>   
                    <S.ButtonsContainer>
                        <S.CardButton onClick={()=>{ delTask(item.id)}}> 
                            <IconContext.Provider value={{size: "2rem"}}>
                                <FaTrashAlt />
                            </IconContext.Provider>    
                        </S.CardButton>
                        <S.CardButton onClick={()=>{doneTask(item.id)}}>
                            <IconContext.Provider value={{color: item.done === true ? 'green' : 'black', size: "2rem"}}>
                                <AiOutlineCheck />
                            </IconContext.Provider>
                        </S.CardButton>
                    </S.ButtonsContainer>
                </S.TaskCard>           
            ))}
        </>
    )
}
export default function  NewTasksComponent(){
    return(
        <S.TaskSection>
            <TitleComponent componentTitle="Lista de Tarefas" />
            <S.TasksContainer>
                <ListCards />
            </S.TasksContainer>
        </S.TaskSection>
    )
}
