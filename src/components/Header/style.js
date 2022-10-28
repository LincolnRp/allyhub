import styled from "styled-components"



export const DivContainer = styled.div`

position: relative;
z-index:2 ;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`

export const DivContent = styled.div`
background-color: white;
margin-top: 2%;
display: flex;
align-items:center;
justify-content: space-between;
width: 1105px;
height: 80px;
left: 0px;
top: 0px;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
img{
    margin-top: 1%;
    margin-left: 2%;
}

`
export const DivButton = styled.div`

display: flex;
margin-right: 4%;
width: 50%;
p{
    color: #0000FF;
    font-weight: bold;
    font-size: 16px;
    margin-right: 10%;
    &:hover{
        cursor: pointer;
        text-decoration: underline;
    }
}
`