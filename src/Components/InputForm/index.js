import React, { useContext, useEffect, useState } from "react" //importando o hooks necessários na construção do component
import { Context } from "../../Services/Context/context" //importando contexto para ser usado no useContext
import {MdPostAdd} from "react-icons/md" //icone importado da lib React Icons
import { IconContext } from "react-icons"  //contexto dos ínicos, nos permite passar estilos via props diretamente ao ícone, via provider
import * as S from './style'  //importando tudo o que for estilo do documento e armazenando dentro de S
/* Component responsaǘel pelo formulário, manipulação do input e função de adicionar novas tarefas */
export default function FormComponent(){
    const [inputData, setInputData] = useState() //guarda o que foi digitado no input 
    const {taskList, setTaskList} = useContext(Context) //states passados via contexto
    /* função responsável por aidicionar as tarefas a lista de tarefas,
    esse função tem fuma condicional que não permite enviar uma tarefa vazia
    a função pega o que foi digitado no input e concatena na lista anterior, junto com uma Id gerada automaticamente pelo método Math
    */
    const addTask = ()=>{
        if(inputData === ""){
            return
        }
        setTaskList(taskList.concat({
            id: Math.random(),
            task: inputData
        }))
        setInputData("")
    }
    return(
        <S.FormContainer onSubmit={(e)=>{e.preventDefault()}}> {/* Permite que a tarefa seja adicionada com o botão entender, ao mesmo tempo que impede ela  */}
            <S.InputTask 
                value={inputData} //define um valor inicial ao input, que nesse caso, é vazio, permitindo voltar a esse estado quando a tarefa for adicionada
                onChange={e=>setInputData(e.target.value)} /* adiciona o valor do input ao state data */
                placeholder="Adicione aqui sua tarefa"
            />
            <S.ButtonAdd onClick={()=>{
                addTask()
            }}> 
                <IconContext.Provider value={{size: '1.6rem'}}> {/* provedor o icone, passa as propriedades que alteram o estilo */}
                    <MdPostAdd />
                </IconContext.Provider>
            </S.ButtonAdd>
        </S.FormContainer>
    )
}