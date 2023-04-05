import React, { useContext } from "react"
import { IconContext } from "react-icons"
import {MdPostAdd} from "react-icons/md"
import * as S from './style'
import { Context } from "../../Services/Context/context"
export default function FormComponent(){
    const {inputData, setInputData} = useContext(Context)
    const addTask = (e)=>{
        setInputData(e.target.value)
    }
    return(
        <S.FormContainer>
            <S.InputTask 
                value={inputData} 
                onChange={()=>{ addTask() }}
                placeholder="Adicione aqui sua tarefa"
            />
            <S.ButtonAdd> 
                <IconContext.Provider value={{size: '1.6rem'}}>
                    <MdPostAdd />
                </IconContext.Provider>
            </S.ButtonAdd>
        </S.FormContainer>
    )
}