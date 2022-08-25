import React, { useState } from "react";
import wordSlice from "../../app/Redux Slices/wordSlice";
import '../Word/index.scss'
import {useDispatch, useSelector} from 'react-redux'
import {selectWord1, selectWord2, selectWord3, selectWord4, selectWord5, selectGameOver, selectGuessCount, clearWord, realWordProtocal} from '../../app/Redux Slices/gameSlice'

function Word({handleClearAlreadyUsed}){
    const dispatch = useDispatch()
    let word1 = useSelector(selectWord1)
    let word2 = useSelector(selectWord2)
    let word3 = useSelector(selectWord3)
    let word4 = useSelector(selectWord4)
    let word5 = useSelector(selectWord5)

    console.log(word1, word2, word3, word4, word5)
    const [errors, setErrors] = useState({
        message: '',
        show: false,
    })

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'd8b397fe8fmsh4d32773da56cd7bp1ac308jsn196ce919ec3a',
            'X-RapidAPI-Host': 'wordsapiv1.p.rapidapi.com'
        }
    };
    
    function errorCleanup(){
        setTimeout(()=>{
            setErrors({
                message: '',
                show: false
            })
        }, 5000)
            
    }

    function handleSubmit(e){
        let wordPieces = [...e.target.value]
        let filteredPieces = wordPieces.filter((piece) => piece !== ',')
        let wordToSubmit = filteredPieces.join('')
        console.log(wordToSubmit)
        fetch(`https://wordsapiv1.p.rapidapi.com/words/${wordToSubmit}/`, options)
        .then(response => response.json())
        .then(response => {
            if (response.results !== undefined){
                console.log(response)
                dispatch(realWordProtocal())
                handleClearAlreadyUsed()
            } else {
                setErrors({
                message: 'Not a word',
                show: true
            })
            dispatch(clearWord())
            setTimeout((errorCleanup(), 1000))
            handleClearAlreadyUsed()
            }
        })
        .catch(err => console.log(err));
    }
    const errorsDisplay = <div>
        {errors.message}
    </div>
    return (
        <div className='words-container'>
            <div id='word1'>
                <span className='word-piece'>{word1.letterArr[0]? word1.letterArr[0] : null}</span>
                <span className='word-piece'>{word1.letterArr[1]? word1.letterArr[1] : null}</span>
                <span className='word-piece'>{word1.letterArr[2]? word1.letterArr[2] : null}</span>
                <span className='word-piece'>{word1.letterArr[3]? word1.letterArr[3] : null}</span>
                <span className='word-piece'>{word1.letterArr[4]? word1.letterArr[4] : null}</span>
                <span className='word-piece'>{word1.letterArr[5]? word1.letterArr[5] : null}</span>
                <span className='word-piece'>{word1.letterArr[6]? word1.letterArr[6] : null}</span>

                <p>{word1.score}</p>
                <button value={word1.letterArr} onClick={handleSubmit}>Submit</button>
            </div>
            <div id='word2'>
                <span className='word-piece'>{word2.letterArr[0]? word2.letterArr[0] : null}</span>
                <span className='word-piece'>{word2.letterArr[1]? word2.letterArr[1] : null}</span>
                <span className='word-piece'>{word2.letterArr[2]? word2.letterArr[2] : null}</span>
                <span className='word-piece'>{word2.letterArr[3]? word2.letterArr[3] : null}</span>
                <span className='word-piece'>{word2.letterArr[4]? word2.letterArr[4] : null}</span>
                <span className='word-piece'>{word2.letterArr[5]? word2.letterArr[5] : null}</span>
                <span className='word-piece'>{word2.letterArr[6]? word2.letterArr[6] : null}</span>
                
                <p>{word2.score}</p>
                <button value={word2.letterArr} onClick={handleSubmit}>Submit</button>
            </div>
            <div id='word3'>
                <span className='word-piece'>{word3.letterArr[0]? word3.letterArr[0] : null}</span>
                <span className='word-piece'>{word3.letterArr[1]? word3.letterArr[1] : null}</span>
                <span className='word-piece'>{word3.letterArr[2]? word3.letterArr[2] : null}</span>
                <span className='word-piece'>{word3.letterArr[3]? word3.letterArr[3] : null}</span>
                <span className='word-piece'>{word3.letterArr[4]? word3.letterArr[4] : null}</span>
                <span className='word-piece'>{word3.letterArr[5]? word3.letterArr[5] : null}</span>
                <span className='word-piece'>{word3.letterArr[6]? word3.letterArr[6] : null}</span>

                <p>{word3.score}</p>
                <button value={word3.letterArr} onClick={handleSubmit}>Submit</button>
            </div>
            <div id='word4'>
                <span className='word-piece'>{word4.letterArr[0]? word4.letterArr[0] : null}</span>
                <span className='word-piece'>{word4.letterArr[1]? word4.letterArr[1] : null}</span>
                <span className='word-piece'>{word4.letterArr[2]? word4.letterArr[2] : null}</span>
                <span className='word-piece'>{word4.letterArr[3]? word4.letterArr[3] : null}</span>
                <span className='word-piece'>{word4.letterArr[4]? word4.letterArr[4] : null}</span>
                <span className='word-piece'>{word4.letterArr[5]? word4.letterArr[5] : null}</span>
                <span className='word-piece'>{word4.letterArr[6]? word4.letterArr[6] : null}</span>

                <p>{word4.score}</p>
                <button value={word4.letterArr} onClick={handleSubmit}>Submit</button>
            </div>
            <div id='word5'>
                <span className='word-piece'>{word5.letterArr[0]? word5.letterArr[0] : null}</span>
                <span className='word-piece'>{word5.letterArr[1]? word5.letterArr[1] : null}</span>
                <span className='word-piece'>{word5.letterArr[2]? word5.letterArr[2] : null}</span>
                <span className='word-piece'>{word5.letterArr[3]? word5.letterArr[3] : null}</span>
                <span className='word-piece'>{word5.letterArr[4]? word5.letterArr[4] : null}</span>
                <span className='word-piece'>{word5.letterArr[5]? word5.letterArr[5] : null}</span>
                <span className='word-piece'>{word5.letterArr[6]? word5.letterArr[6] : null}</span>

                <p>{word5.score}</p>
                <button value={word5.letterArr} onClick={handleSubmit}>Submit</button>
            </div>

            {errors.show ? errorsDisplay : null}
        </div>
    )
}

export default Word