import React from "react"
import * as S from "./style"
const TitleComponent = (props) =>{
    return (
        <S.TitleBarContainer>
            <S.SectionTitle>{props.componentTitle}</S.SectionTitle>
        </S.TitleBarContainer>
    )
}
export default TitleComponent