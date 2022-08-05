import React, {useState} from 'react'
import '../Settings/index.scss'

function Settings({handleClosePopUp}){

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
            </div>
            

        </div>
    )
}

export default Settings