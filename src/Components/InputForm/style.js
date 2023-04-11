import styled from "styled-components";
export const FormContainer = styled.form`
    width: 50%;
    height: 60vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #9E4784;
    margin: 0 auto;
    border-radius: 10px;
    @media (min-device-width: 375px) 
        and (max-device-width: 667px) { 
        width: 95%;
        justify-content: space-around;
    }
`
export const InputTask = styled.input`
    width: 15vw;
    height: 4vh;
    border-radius: 5px;
    font-size: 1rem;
    text-align: center;
    border: none;
    @media (min-width: 800px){
        :focus{
        width: 20vw;
        transition: ease-in 0.4s;
    }
    :placeholder-shown{
        text-align: center;
    }
    }
    
    @media (min-device-width: 375px) 
        and (max-device-width: 667px) { 
        width: 80%;
        height: 6vh;
    }
`
export const DateTimeContainer = styled.section`
    width: 90%;
    display: flex;
    justify-content: center;
`
export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 90%;
`
export const inputLabel = styled.label`
    font-family: 'Montserrat', sans-serif;
    font-size: 1.1rem;
    margin: .5rem 0;
    color: #f2f2fe;

`
export const ButtonAdd = styled.button`
    width: 10vw;
    cursor: pointer;
    border: none;
    background: transparent;
    :hover{
        transform: scale(1.1);
    }
   
`