import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {
    toggle,
    selectTheme
} from '../../app/Redux Slices/themeSlice'
import '../Settings/index.scss'
import cancel from '../../images/cancel.png'
import cancelDark from '../../images/cancelDark.png'
import { ToggleSlider }  from "react-toggle-slider";


function Settings({handleClosePopUp}){
    const [toggleBoolean, setToggleBoolean] = useState(false)
    const dispatch = useDispatch()
    const theme = useSelector(selectTheme)
    
    function handleToggleClick(){
        console.log('click')
        if (!toggleBoolean){
            setToggleBoolean(true);
            dispatch(toggle())
        } else {
            setToggleBoolean(false)
            dispatch(toggle())
        }
    }
    
    return (
        <div className='settings-container'>
            <div className='pop-up-title'>
                <h3>SETTINGS</h3>
                {theme === 'light' ? <img src={cancel} onClick={(e)=> handleClosePopUp(e)} className='close'/> : <img src={cancelDark} onClick={(e)=> handleClosePopUp(e)} className='close'/>}
            </div>
            
            <div className='settings'>
                <div>
                    <span>DARK MODE</span>
                    {/* <button onClick={()=> dispatch(toggle())}>toggle</button> */}
                    <div id='toggle-container' onClick={handleToggleClick} style={{
                        backgroundColor: toggleBoolean ? 'green' : 'grey'
                    }}>
                        <div id='toggler' style={{
                            left: toggleBoolean ? '25px' : '2px'
                        }}></div>
                    </div>
                </div>
                
            </div>
            

        </div>
    )
}

export default Settings