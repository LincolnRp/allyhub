import React from 'react'
import {DivContainer, DivSocial} from './style'
import logo from './../../assets/images/header-logo.png'
import facebook from './../../assets/images/facebook.png'
import instagram from './../../assets/images/instagram.png'
import linkedin from './../../assets/images/linkedin.png'

function Footer() {
  return (
    <DivContainer>
        <img src={logo}></img>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            <DivSocial>
                <img src={facebook}></img>
                <img src={linkedin}></img>
                <img src={instagram}></img>
            </DivSocial>
    </DivContainer>
  )
}

export default Footer