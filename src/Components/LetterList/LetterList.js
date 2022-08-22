import React, {useState, useEffect} from "react";
import '../LetterList/index.scss'
import {useDispatch, useSelector} from 'react-redux'
import {selectWord1, selectGameOver, selectGuessCount, formWord1} from '../../app/Redux Slices/gameSlice'

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