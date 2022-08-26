import React, {useState} from "react"
import Instructions from "../../Components/Instructions/Instructions"
import Settings from "../../Components/Settings/Settings"
import '../Main/index.scss'
import LetterList from "../../Components/LetterList/LetterList"
import Word from "../../Components/Word/Word"
import {useDispatch, useSelector} from 'react-redux'
import {selectWord1, selectWord2, selectWord3, selectWord4, selectWord5, selectGameOver, selectGuessCount, clearWord, realWordProtocal, guess, gameOverCheck} from '../../app/Redux Slices/gameSlice'


function Main({showNavClick, toggleNavPop, handleClosePopUp, scramble, pointsObj}){
    const [alreadyUsed, setAlreadyUsed] = useState([])
    const [errors, setErrors] = useState({
        message: '',
        show: false,
    })
    let guessCount = useSelector(selectGuessCount)
    function errorCleanup(){
        setTimeout(()=>{
            setErrors({
                message: '',
                show: false
            })
        }, 5000)
            
    }

    function handleAddToAlreadyUsed(str){
        setAlreadyUsed([...alreadyUsed, str])
    }

    function handleRemoveLastFromAlreadyUsed(){
        alreadyUsed.splice(-1)
        setAlreadyUsed([...alreadyUsed])
    }

    function handleClearAlreadyUsed(){
        setAlreadyUsed([])
    }
    const guessDisplay = <div id='guess' style={{
        backgroundColor: guessCount > 3 ? 'green' : 'orange' && guessCount < 2 ? 'red' : 'orange'
    }}>{guessCount} tries left</div>

    const errorDisplay = <div id='errors'>{errors.message}</div>

    return (
        <div className='main-container'>
            {guessDisplay}
            <Word 
            errorCleanup={errorCleanup}
            setErrors={setErrors}
            errors={errors}
            handleClearAlreadyUsed={handleClearAlreadyUsed}/>
            {errors.show ? errorDisplay : null}
            <LetterList
                errorCleanup={errorCleanup}
                setErrors={setErrors}
                errors={errors}
                handleAddToAlreadyUsed={handleAddToAlreadyUsed}
                handleRemoveLastFromAlreadyUsed={handleRemoveLastFromAlreadyUsed} 
                handleClearAlreadyUsed={handleClearAlreadyUsed}
                alreadyUsed={alreadyUsed} 
                scramble={scramble} 
                pointsObj={pointsObj}/>
            {toggleNavPop && showNavClick === 'settings' ? <Settings handleClosePopUp={handleClosePopUp}/> : null}
            {toggleNavPop && showNavClick === 'instructions' ? <Instructions handleClosePopUp={handleClosePopUp}/> : null}
            
        </div>
    )
}

export default Main