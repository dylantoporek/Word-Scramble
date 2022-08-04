import React, {useState} from 'react'
import '../Settings/index.scss'
function Settings(setToggleNavPop){

    // function handleClick(){
    //     setToggleNavPop(false)
    // }
   
    return (
        <div className='settings-container'>
            <button className='close'>X</button>
            <h2>Settings</h2>
            <span>dark mode</span>

        </div>
    )
}

export default Settings