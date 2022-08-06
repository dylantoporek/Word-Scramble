import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {
    toggle
} from '../../app/Redux Slices/themeSlice'
import '../Settings/index.scss'

function Settings({handleClosePopUp}){
    const dispatch = useDispatch()
    // function handleClick(){
    //     setToggleNavPop(false)
    // }
   
    return (
        <div className='settings-container'>
            <div className='pop-up-title'>
                <h2>Settings</h2>
                <button onClick={(e)=> handleClosePopUp(e)} className='close'>X</button>
            </div>
            
            <div>
                <span>dark mode</span>
                <button onClick={()=> dispatch(toggle())}>toggle</button>
            </div>
            

        </div>
    )
}

export default Settings