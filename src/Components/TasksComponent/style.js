import styled from "styled-components"
export const TasksContainer = styled.section`
    width: 50%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 0 auto;

`
export const TaskItem = styled.p`
    list-style: none;
    max-width: 70%;
    height: 80%;
    padding: 1rem;
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
export const DelButton = styled.button`
    background: none;
    width: 5vw;
    float: right;
    border: none;
    cursor: pointer;
`