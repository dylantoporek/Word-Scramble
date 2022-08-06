import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {
    toggle,
    selectTheme
} from '../../app/Redux Slices/themeSlice'
import '../Settings/index.scss'
import cancel from '../../images/cancel.png'
import cancelDark from '../../images/cancelDark.png'


function Settings({handleClosePopUp}){
    const dispatch = useDispatch()
    const theme = useSelector(selectTheme)
   console.log(theme)
    return (
        <div className='settings-container'>
            <div className='pop-up-title'>
                <h3>SETTINGS</h3>
                {theme === 'light' ? <img src={cancel} onClick={(e)=> handleClosePopUp(e)} className='close'/> : <img src={cancelDark} onClick={(e)=> handleClosePopUp(e)} className='close'/>}
            </div>
            
            <div className='settings'>
                <div>
                    <span>DARK MODE</span>
                    <button onClick={()=> dispatch(toggle())}>toggle</button>
                </div>
                
            </div>
            

        </div>
    )
}

export default Settings