import styled from "styled-components"

export const Header = styled.header`
    width: 50%;
    height: 12vh;
    margin: 10px auto;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #9E4784;
    @media (min-device-width: 375px) 
    and (max-device-width: 667px){
        width: 95%;
        height: 16vh;
    }
`
export const HeaderTitle = styled.h1 `
    font-family: 'Montserrat', sans-serif;
    text-align: center;
    color: #f2f2fe;
`