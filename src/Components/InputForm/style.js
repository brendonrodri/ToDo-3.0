import styled from "styled-components";
export const FormContainer = styled.form`
    width: 50%;
    height: 20vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: aliceblue;
    margin: 0 auto;
`
export const InputTask = styled.input`
    width: 15vw;
    height: 4vh;
    border-radius: 5px;
    font-size: 1rem;
    text-align: center;
    border: none;
    :focus{
        width: 20vw;
        transition: ease-in 0.4s;
    }
    :placeholder-shown{
        text-align: center;
    }
`
export const InputTaskMax = styled.input`
    width: 15vw;
    height: 4vh;
    border-radius: 5px;
    font-size: 1rem;
`
export const ButtonAdd = styled.button`
    width: 3vw;
    height: 4vh;
    cursor: pointer;
    border: none;
    background: transparent;
`