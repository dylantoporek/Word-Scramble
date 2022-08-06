import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {
    toggle
} from '../../app/Redux Slices/themeSlice'
import '../Settings/index.scss'

function Settings({handleClosePopUp}){
    const dispatch = useDispatch()
    
   
    return (
        <div className='settings-container'>
            <div className='pop-up-title'>
                <h3>SETTINGS</h3>
                <button onClick={(e)=> handleClosePopUp(e)} className='close'>X</button>
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