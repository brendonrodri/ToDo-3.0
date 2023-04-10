import styled from "styled-components"
export const TitleBarContainer = styled.section`
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 8vh;
    margin: .8rem auto;
    margin-bottom: 0;
    background-color: #9E4784;
    @media (min-device-width: 375px) 
        and (max-device-width: 667px) { 
        width: 95%;
    }
`
export const SectionTitle = styled.h2`
    font-size: 1.3rem;
    font-family: 'Montserrat', sans-serif;
    text-align: center;
    color: #fefefe;
`