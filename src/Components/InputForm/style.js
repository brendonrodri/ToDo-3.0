import styled from "styled-components";
export const FormContainer = styled.form`
    width: 50%;
    height: 20vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #9E4784;
    margin: 0 auto;
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
export const InputTaskMax = styled.input`
    width: 15vw;
    height: 4vh;
    border-radius: 5px;
    font-size: 1rem;
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