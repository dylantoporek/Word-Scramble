import React, {useState, useEffect} from "react";
import '../LetterList/index.scss'
import {useDispatch, useSelector} from 'react-redux'
import {selectWord1, selectGameOver, selectGuessCount, formWord1} from '../../app/Redux Slices/gameSlice'

function LetterList({scramble, pointsObj}){
const dispatch  = useDispatch()



    function handleLetterClick(e){
       let chosenIndex = e.target.querySelector('span').id

        if(e.target.innerText.length > 1){
            let picked = e.target.innerText[0]
            checkIfAvailable(picked, chosenIndex)
            // dispatch(formWord1(picked))
        } else {
            let picked = e.target.innerText
            checkIfAvailable(picked, chosenIndex)
            // dispatch(formWord1(picked))
        }
        
    }

    function checkIfAvailable(letter, index){
        
        console.log(index)
        console.log(letter)
    }

    let scrambleDisplay = scramble.map((letter, index) => {
        return <div key={`${letter}-${index}`} className='letter' onClick={handleLetterClick}>
            <span id={index} className='l'>{letter}</span>
            <p className='score'>{pointsObj[letter]}</p>
        </div>
    })

    return (
    <div className='letters'>
        {scrambleDisplay}
    </div>
)
}

export default LetterList