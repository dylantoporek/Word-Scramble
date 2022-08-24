import React, {useState, useEffect} from "react";
import '../LetterList/index.scss'
import {useDispatch, useSelector} from 'react-redux'
import {selectWord1, selectGameOver, selectGuessCount, formWord1, editWord1} from '../../app/Redux Slices/gameSlice'

function LetterList({scramble, pointsObj}){
    const [alreadyUsed, setAlreadyUsed] = useState([])
    const [errors, setErrors] = useState({
        message: '',
        show: false,
    })

    const dispatch  = useDispatch()

    function errorCleanup(){
        setTimeout(()=>{
            setErrors({
                message: '',
                show: false
            })
        }, 2000)
            
    }
    function handleLetterClick(e){
        if (alreadyUsed.includes(e.target.id)){
            setErrors({
                message: 'Letter already used in this word.',
                show: true
            })
            setTimeout((errorCleanup(), 1000))
        } else {
            setAlreadyUsed([...alreadyUsed, e.target.id])
            dispatch(formWord1(e.target.id[0]))
        }
    }


    document.body.onkeyup = (e) => {
        
        if (e.key === 'Backspace'){
            dispatch(editWord1())
            if (alreadyUsed.length < 2){
                setAlreadyUsed([])
            } if (alreadyUsed.length > 1){
                alreadyUsed.splice(-1)
                setAlreadyUsed([...alreadyUsed])
            }
        }

        if (!scramble.includes(e.key.toUpperCase()) && e.key !== 'Backspace' ){
            setErrors({
                message: 'Letter not availble in this Scramble.',
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
                    message: 'Letter already used in this word.',
                    show: true
                })
                setTimeout((errorCleanup(), 1000))
            }
            found.map((result) => {
                if (alreadyUsed.includes(result)){
                    setErrors({
                        message: 'Letter already used in this word.',
                        show: true
                    })
                    setTimeout((errorCleanup(), 1000))
                } if (!alreadyUsed.includes(result)){
                    dispatch(formWord1(result[0]))
                    return setAlreadyUsed([...alreadyUsed, result])
                }
            })
        }
    }
    console.log(useSelector(selectWord1))
    console.log(alreadyUsed)
    let scrambleDisplay = scramble.map((letter, index) => {
        return <div key={`${letter}-${index}`} id={`${letter + index}`} className='letter' onClick={handleLetterClick}>
            <span id={`${letter + index}`} className='l'>{letter}</span>
            <p id={`${letter + index}`} className='score'>{pointsObj[letter]}</p>
        </div>
    })

    const errorsDisplay = <div>
        {errors.message}
    </div>

    return (
    <div className='letters'>
        {scrambleDisplay}
        {errors.show ? errorsDisplay : null}
    </div>
)
}

export default LetterList