import React, { useContext } from "react"
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
            <S.ButtonAdd> add </S.ButtonAdd>
        </S.FormContainer>
    )
}