import styled from "styled-components"
export const TaskSection = styled.section`
    display: flex;
    flex-direction: column;
`
export const TasksContainer = styled.section`
    width: 50%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 2.1rem;
    grid-row-gap: .5rem;
    margin: 0 auto;
    @media (min-device-width: 375px) 
        and (max-device-width: 667px) { 
        width: 95%;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

`
export const TaskItem = styled.p`
    width: 70%;
    height: 80%;
    padding: 1rem;
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    line-break: strict;
`
export const TaskCard = styled.div`
    display: flex;
    width: 15vw;
    height: 30vh;
    flex-direction: column;
    background-color: aliceblue;
    margin-top:1rem;
    @media (min-device-width: 375px) 
        and (max-device-width: 667px) { 
        width: 100%;
        height: 40vh;
    }
`
export const ButtonsContainer = styled.div`
    display: flex;
    justify-content: flex-end;
`
export const CardButton = styled.button`
    background: none;
    float: right;
    border: none;
    cursor: pointer;
`