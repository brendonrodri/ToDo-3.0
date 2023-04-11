import React, { useContext, useState } from "react" //importando o hooks necessários na construção do component
import { Context } from "../../Services/Context/context" //importando contexto para ser usado no useContext
import {MdPostAdd} from "react-icons/md" //icone importado da lib React Icons
import { IconContext } from "react-icons"  //contexto dos ínicos, nos permite passar estilos via props diretamente ao ícone, via provider
import * as S from './style'  //importando tudo o que for estilo do documento e armazenando dentro de S
/* Component responsaǘel pelo formulário, manipulação do input e função de adicionar novas tarefas */
export default function FormComponent(){
    const [taskTitle, setTaskTitle] = useState() //guarda o que foi digitado no input 
    const [taskDesc, setTaskDesc] = useState()
    const [taskDate, setTaskDate] = useState()
    const [taskTime, setTaskTime] = useState()
    const [taskLocal, setTaskLocal] = useState()
    const {taskList, setTaskList} = useContext(Context) //states passados via contexto
    /* função responsável por aidicionar as tarefas a lista de tarefas,
    esse função tem fuma condicional que não permite enviar uma tarefa vazia
    a função pega o que foi digitado no input e concatena na lista anterior, junto com uma Id gerada automaticamente pelo método Math
    */
    const addTask = ()=>{
        if(!taskTitle){
            return
        }
        setTaskList(taskList.concat({
            id: Math.random(),
            task: taskTitle,
            done: false
        }))
        setTaskTitle("")
    }
    return(
        <S.FormContainer onSubmit={(e)=>{e.preventDefault()}}> {/* Permite que a tarefa seja adicionada com o botão entender, ao mesmo tempo que impede ela  */}
            <S.InputContainer>
                <S.inputLabel>Tarefa</S.inputLabel>
                <S.InputTask 
                    value={taskTitle} //define um valor inicial ao input, que nesse caso, é vazio, permitindo voltar a esse estado quando a tarefa for adicionada
                    onChange={e=>setTaskTitle(e.target.value)} /* adiciona o valor do input ao state data */
                    placeholder="Dê um nome a sua tarefa"
                />
            </S.InputContainer>
            <S.InputContainer>
                <S.inputLabel>Descrição da tarefa</S.inputLabel>
                <S.InputTask 
                    value={taskDesc}
                    onChange={e => setTaskDesc(e.target.value)}
                    placeholder="Descreva aqui sua tarefa"
                />
            </S.InputContainer>
            <S.DateTimeContainer>
                <S.InputContainer>
                    <S.inputLabel>Data</S.inputLabel>
                    <S.InputTask type="date" value={taskDate} onChange={e=>setTaskDate(e.target.value)}   />
                </S.InputContainer>
                <S.InputContainer>
                    <S.inputLabel>Horário</S.inputLabel>
                    <S.InputTask 
                        type="time" 
                        value={taskTime}
                        onChange={e=>setTaskTime(e.target.value)} 
                        style={{width: '70%'}}
                    />
                </S.InputContainer>               
            </S.DateTimeContainer>
            <S.InputContainer>
                <S.inputLabel>Local</S.inputLabel>
                <S.InputTask 
                    value={taskLocal}
                    onChange={e => setTaskLocal(e.target.value)}
                    placeholder="Descreva aqui sua tarefa"
                />
            </S.InputContainer>
            <S.ButtonAdd onClick={()=>{
                addTask()
            }}> 
                <IconContext.Provider value={{size: '12vw', color: '#f3f3f3'}}> {/* provedor o icone, passa as propriedades que alteram o estilo */}
                    <MdPostAdd />
                </IconContext.Provider>
            </S.ButtonAdd>
        </S.FormContainer>
    )
}