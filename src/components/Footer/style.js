import styled from "styled-components"

export const DivContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-top: 6%;
background-color: #212121;
height: 42vh;
p{
    color: white;
    font-weight: bold;
    width: 50vw;
    text-align: justify;
}
img{
    margin-top: 2%;
}
`

export const DivSocial = styled.div`

display: flex;

img{
    margin-top: 4%;
    width: 40px;
    margin-right: 10%;
    &:hover{
        cursor: pointer;
    }
}

`