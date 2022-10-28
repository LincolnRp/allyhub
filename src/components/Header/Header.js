import React from 'react'
import {DivContainer, DivContent, DivButton} from './style'
import headerlogo from './../../assets/images/header-logo.png'
import {goToPage} from './../../routes/Coordinator'
import { useNavigate } from 'react-router-dom'

function Header() {


  const Navigate = useNavigate();

  return (

    <DivContainer>
        <DivContent>
            <img src={headerlogo}/>
            <DivButton>
            <p onClick={() => goToPage(Navigate, "/")}>Home</p>
            <p><a href='#form'>Cadastre Viagens</a></p>
            <p><a href="#about">Sobre nós</a></p>
            </DivButton>
        </DivContent>
        </DivContainer>

  )
}

export default Header