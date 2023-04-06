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

`
export const TaskItem = styled.p`
    max-width: 70%;
    height: 80%;
    padding: 1rem;
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
`
export const TaskCard = styled.div`
    display: flex;
    width: 15vw;
    height: 30vh;
    flex-direction: column;
    background-color: aliceblue;
    margin-top:1rem;
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