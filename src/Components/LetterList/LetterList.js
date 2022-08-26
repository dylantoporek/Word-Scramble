import React, {useState, useEffect} from "react";
import '../LetterList/index.scss'
import {useDispatch, useSelector} from 'react-redux'
import {selectWord1, selectGameOver, selectGuessCount, formWord, editWord, formWordScore} from '../../app/Redux Slices/gameSlice'

function LetterList({scramble, pointsObj, alreadyUsed, handleAddToAlreadyUsed, handleRemoveLastFromAlreadyUsed, handleClearAlreadyUsed, errors, setErrors, errorCleanup}){

    const dispatch  = useDispatch()

    
    function handleLetterClick(e){
        if (alreadyUsed.includes(e.target.id)){
            setErrors({
                message: `${e.target.id[0].toUpperCase()} is already used in this word.`,
                show: true
            })
            setTimeout((errorCleanup(), 1000))
        } else {
            handleAddToAlreadyUsed(e.target.id)
            dispatch(formWord(e.target.id[0]))
            dispatch(formWordScore(pointsObj[e.target.id[0]]))
        }
    }


    document.body.onkeyup = (e) => {
        
        if (e.key === 'Backspace' && alreadyUsed.length > 0){
            dispatch(editWord(pointsObj[alreadyUsed[alreadyUsed.length-1][0]]))
            if (alreadyUsed.length < 2){
                handleClearAlreadyUsed()
            } if (alreadyUsed.length > 1){
                handleRemoveLastFromAlreadyUsed()
            }
        }

        if (!scramble.includes(e.key.toUpperCase()) && e.key !== 'Backspace' ){
            setErrors({
                message: `${e.key.toUpperCase()} is not available in this Scramble.`,
                show: true
            })
            setTimeout((errorCleanup(), 1000))
        }

        if (scramble.includes(e.key.toUpperCase())){
  
            let found = scramble.map((letter, index) => {
                    if(letter === e.key.toUpperCase()){
                        return `${letter + index}`
                    }
            }).filter((result) => result !== undefined)

            found.forEach((result, index) => {
                if (alreadyUsed.includes(result)){
                    found.splice(index, 1)
                } if (found.length > 1){
                    found = [found[0]]
                }
            })

            if (found.length < 1){
                setErrors({
                    message: `${e.key.toUpperCase()} already used in this word.`,
                    show: true
                })
                setTimeout((errorCleanup(), 1000))
            }
            found.map((result) => {
                if (alreadyUsed.includes(result)){
                    setErrors({
                        message: `${e.key.toUpperCase()} already used in this word.`,
                        show: true
                    })
                    setTimeout((errorCleanup(), 1000))
                } if (!alreadyUsed.includes(result)){
                    dispatch(formWord(result[0]))
                    dispatch(formWordScore(pointsObj[result[0]]))
                    return handleAddToAlreadyUsed(result)
                }
            })
        }
    }

    let scrambleDisplay = scramble.map((letter, index) => {
        return <div key={`${letter}-${index}`} id={`${letter + index}`} className='letter' onClick={handleLetterClick} style={{
            backgroundColor: alreadyUsed.includes(`${letter + index}`) ? 'grey' : 'tan'
        }}>
            <span id={`${letter + index}`} className='l'>{letter}</span>
            <p id={`${letter + index}`} className='score'>{pointsObj[letter]}</p>
        </div>
    })

  

    return (
    <div className='letters'>
        {scrambleDisplay}
    </div>
)
}

export default LetterList