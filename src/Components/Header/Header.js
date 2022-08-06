import React, {useState} from "react";
import logo from '../../images/logo.png'
import settings from '../../images/gear.png'
import settingsDark from '../../images/gearDark.png'
import instructions from '../../images/instructions.png'
import instructionsDark from '../../images/instructionsDark.png'
import { useSelector } from "react-redux";
import {
    selectTheme
} from '../../app/Redux Slices/themeSlice'
import '../Header/index.scss'


function Header({handleNavClick, toggleNavPop}){
    const theme = useSelector(selectTheme)
console.log(theme)
    return (
            <div className='header-container' style={{
                opacity: toggleNavPop ? '40%' : 100,
            }}>
            <div id='logo'>
                <img src={logo}/>
            </div>
            <h1 id='app-title'>
                Word Scramble
            </h1>
            <div id='options'>
                {theme === 'light' ? <img onClick={handleNavClick} id='instructions' src={instructions}/> : <img onClick={handleNavClick} id='instructions' src={instructionsDark}/> }
                {theme === 'light' ? <img onClick={handleNavClick} id='settings' src={settingsDark}/> : <img onClick={handleNavClick} id='settings' src={settings}/>}
            </div>
            
        </div>
    )
}

export default Header