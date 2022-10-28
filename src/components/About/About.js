import React from 'react'
import {DivContainer, DivContent1, DivContent2, DivImgContent2} from './style'
import about from './../../assets/images/about.png'
import about1 from './../../assets/images/about-1.png'
import about2 from './../../assets/images/about-2.png'

function About() {
    
  return (

    <DivContainer id='about'>
        <DivContent1>
            <img src={about}></img>
        </DivContent1>
        
        <DivContent2>
            <h1>Sobre nós</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
                voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                 non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                 <DivImgContent2>
                    <img src={about1}></img>
                    <img src={about2}></img>

                 </DivImgContent2>
        </DivContent2>

    </DivContainer>

  )
}

export default About