import React, {useState} from 'react'
import '../Instructions/index.scss'

function Instructions(){
    

    return (
        <div className='instructions-container'>
            <button className='close'>X</button>
            <h2>Instructions</h2>
            <li>Instruction 1</li>
            <li>Instruction 2</li>
            <li>Instruction 3</li>
            <li>Instruction 4</li>
            <li>Instruction 5</li>
        </div>
    )
}

export default Instructions