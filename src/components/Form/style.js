import styled from "styled-components";

export const H1 = styled.h1`

color: #0000FF;
    font-weight: bold;
    font-size: 36px;
    margin-top: 4%;
    margin-bottom: -2%;
`

export const DivContainerForm = styled.div`
display: flex;
flex-direction: column;
justify-items: center;
align-items: center;
`
export const DivForm = styled.div`
height: 80vh;
width: 80%;
margin-top: 4%;
display: flex;
flex-direction: column;
align-items: center;
justify-items: center;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

button{
    margin-top: 2%;
    background-color: #0000FF;;
    border-color: #7AB730;
    color: #fff;
    font-weight: bold;
    width: 180px;
    height: 10vh;
    text-align: center;
    &:hover{
        opacity: 0.9;
    }
}

`

export const TextLabel = styled.label`

font-size: 16px;
font-weight: bold;
`