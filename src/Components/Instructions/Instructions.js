import React, {useState} from 'react'
import '../Instructions/index.scss'

function Instructions({handleClosePopUp}){
    

    return (
        <div className='instructions-container'>
            <div className='pop-up-title'>
            <h3>HOW TO PLAY</h3>
            <button onClick={(e)=> handleClosePopUp(e)} className='close'>X</button>
            </div>
            
            <div>
            <p>Instruction 1</p>
            <p>Instruction 2</p>
            <p>Instruction 3</p>
            <p>Instruction 4</p>
            <p>Instruction 5</p>
            </div>
            
        </div>
    )
}

export default Instructions