import React, {useState} from "react"
import Instructions from "../../Components/Instructions/Instructions"
import Settings from "../../Components/Settings/Settings"
import '../Main/index.scss'
import LetterList from "../../Components/LetterList/LetterList"
import GameOver from "../../Components/GameOver/GameOver"
import Word from "../../Components/Word/Word"
import {useDispatch, useSelector} from 'react-redux'
import {selectWord1, selectWord2, selectWord3, selectWord4, selectWord5, selectGameOver, selectGuessCount, clearWord, realWordProtocal, guess, gameOverCheck} from '../../app/Redux Slices/gameSlice'


function Main({showNavClick, toggleNavPop, handleClosePopUp, scramble, pointsObj}){
    const [alreadyUsed, setAlreadyUsed] = useState([])
    const [errors, setErrors] = useState({
        message: '',
        show: false,
    })
    let gameOver = useSelector(selectGameOver)
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
    const guessDisplay = <div id='guess'>
        <span style={{
            backgroundColor: guessCount > 4? 'lightgreen' : 'red',
            width: '20px',
            height: '20px',
            borderRadius: '5em'
        }}></span>
        <span style={{
            backgroundColor: guessCount > 3 ? 'lightgreen' : 'red',
            width: '20px',
            height: '20px',
            borderRadius: '5em'
        }}></span>
        <span style={{
            backgroundColor: guessCount > 2 ? 'lightgreen' : 'red',
            width: '20px',
            height: '20px',
            borderRadius: '5em'
        }}></span>
        <span style={{
            backgroundColor:  guessCount > 1 ? 'lightgreen' : 'red',
            width: '20px',
            height: '20px',
            borderRadius: '5em'
        }}></span>
        <span style={{
            backgroundColor: guessCount > 0 ? 'lightgreen' : 'red',
            width: '20px',
            height: '20px',
            borderRadius: '5em'
        }}></span>
    </div>

    const errorDisplay = <div id='errors'>{errors.message}</div>
        console.log(gameOver)
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
            {gameOver ? <GameOver/> : null}
        </div>
    )
}

export default Main