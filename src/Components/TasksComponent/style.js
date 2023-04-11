import styled from "styled-components"
export const TaskSection = styled.section`
    display: flex;
    flex-direction: column;
    height: 60vh;
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
export const TaskCard = styled.div`
    display: flex;
    width: 15vw;
    height: 30vh;
    flex-direction: column;
    background-color: aliceblue;
    margin-top:1rem;
    border-radius: 5px;
    @media (min-device-width: 375px) 
        and (max-device-width: 667px) { 
        width: 100%;
        height: 40vh;
    }
    ul{
        list-style: none;
    }
`
export const TaskTitle = styled.h3`
    margin: 0 1rem;
    border-bottom: 1px solid black;
    text-align: center;
    padding: 1rem;
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    ::first-letter {
    text-transform: uppercase;
    }
`
export const TaskDescription = styled.p`
    height: 40%;
    padding: 1rem;
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    word-break: break-all;
    ::first-letter {
    text-transform: uppercase;
}
`
export const TasksDateContainer = styled.div`
    height: 22%;
`
export const DateTime = styled.p`
    padding: 0 1rem;
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    line-break: normal;
    font-size: 0.9rem;
`
export const Local = styled.p`
    padding: 0 1rem;
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    font-size: 0.9rem;
    line-break: normal;
    word-break: break-all;
    ::first-letter {
    text-transform: uppercase;
}

`
export const ButtonsContainer = styled.div`
    display: flex;
    width: 95%;
    justify-content: flex-end;
`
export const CardButton = styled.button`
    background: none;
    float: right;
    border: none;
    cursor: pointer;
`