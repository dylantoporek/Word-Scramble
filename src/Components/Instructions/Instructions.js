import React, {useState} from 'react'
import '../Instructions/index.scss'
import cancel from '../../images/cancel.png'
import cancelDark from '../../images/cancelDark.png'
import { useSelector } from 'react-redux'
import {selectTheme} from '../../app/Redux Slices/themeSlice'

function Instructions({handleClosePopUp}){
 const theme = useSelector(selectTheme)    

    return (
        <div className='instructions-container'>
            <div className='pop-up-title'>
            <h3>HOW TO PLAY</h3>
            {theme === 'light' ? <img src={cancel} onClick={(e)=> handleClosePopUp(e)} className='close'/> : <img src={cancelDark} onClick={(e)=> handleClosePopUp(e)} className='close'/>}
            </div>
            
            <div className='instructions'>
            <p>Submit the highest scoring word you can in 5 tries. Try to use all 7 letters!</p>
            <p>Each submission must be a valid word, between 4-7 letters.</p>
            <p>After each submission, your word will be scored, and a definition provided. </p>
            </div>
            
        </div>
    )
}

export default Instructions