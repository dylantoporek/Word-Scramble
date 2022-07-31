import React from "react";
import logo from '../../images/logo.png'
import settings from '../../images/gear.png'
import instructions from '../../images/instructions.png'
import '../Header/index.scss'

function Header(){
    return (
        <div className='header-container'>
            <div id='logo'>
                <img src={logo}/>
            </div>
            <h1 id='app-title'>
                Word Scramble
            </h1>
            <div id='options'>
                <img src={instructions}/>
                <img id='settings' src={settings}/>
            </div>
        </div>
    )
}

export default Header