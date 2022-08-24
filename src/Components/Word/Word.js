import React, { useState } from "react";
import wordSlice from "../../app/Redux Slices/wordSlice";
import '../Word/index.scss'
import {useDispatch, useSelector} from 'react-redux'
import {selectWord1, selectWord4, selectGameOver, selectGuessCount, clearWord1} from '../../app/Redux Slices/gameSlice'

function Word(){
    const dispatch = useDispatch()
    let word1 = (useSelector(selectWord1))
    let word4 = (useSelector(selectWord4))

    console.log(word4)
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

    function handleSubmit(){
        let wordPieces = document.getElementsByClassName('word-piece')
        let arr = [...wordPieces]
        let wordPieceArr = arr.map((piece) => piece.innerText).filter((piece) => piece !== "" )
        let wordToSubmit = wordPieceArr.join('')
        console.log(wordToSubmit)
        fetch(`https://wordsapiv1.p.rapidapi.com/words/${wordToSubmit}/`, options)
        .then(response => response.json())
        .then(response => {
            if (response.results !== undefined){
                console.log(response)
            } else {
                setErrors({
                message: 'Not a word',
                show: true
            })
            dispatch(clearWord1())
            setTimeout((errorCleanup(), 1000))
            }
        })
        .catch(err => console.log(err));
    }
    const errorsDisplay = <div>
        {errors.message}
    </div>
    return (
        <div className='words-container'>
            <div>
                <span className='word-piece'>{word1.letterArr[0]? word1.letterArr[0] : null}</span>
                <span className='word-piece'>{word1.letterArr[1]? word1.letterArr[1] : null}</span>
                <span className='word-piece'>{word1.letterArr[2]? word1.letterArr[2] : null}</span>
                <span className='word-piece'>{word1.letterArr[3]? word1.letterArr[3] : null}</span>
                <span className='word-piece'>{word1.letterArr[4]? word1.letterArr[4] : null}</span>
                <span className='word-piece'>{word1.letterArr[5]? word1.letterArr[5] : null}</span>
                <span className='word-piece'>{word1.letterArr[6]? word1.letterArr[6] : null}</span>

                <p>{word1.score}</p>
                <button onClick={handleSubmit}>Submit</button>
            </div>
            {/* <div>
                <span>{word1.letterArr[0]? word1.letterArr[0] : null}</span>
                <span>{word1.letterArr[1]? word1.letterArr[1] : null}</span>
                <span>{word1.letterArr[2]? word1.letterArr[2] : null}</span>
                <span>{word1.letterArr[3]? word1.letterArr[3] : null}</span>
                <span>{word1.letterArr[4]? word1.letterArr[4] : null}</span>
                <span>{word1.letterArr[5]? word1.letterArr[5] : null}</span>
                <span>{word1.letterArr[6]? word1.letterArr[6] : null}</span>
            </div>
            <div>
                <span>{word1.letterArr[0]? word1.letterArr[0] : null}</span>
                <span>{word1.letterArr[1]? word1.letterArr[1] : null}</span>
                <span>{word1.letterArr[2]? word1.letterArr[2] : null}</span>
                <span>{word1.letterArr[3]? word1.letterArr[3] : null}</span>
                <span>{word1.letterArr[4]? word1.letterArr[4] : null}</span>
                <span>{word1.letterArr[5]? word1.letterArr[5] : null}</span>
                <span>{word1.letterArr[6]? word1.letterArr[6] : null}</span>
            </div>
            <div>
                <span>{word1.letterArr[0]? word1.letterArr[0] : null}</span>
                <span>{word1.letterArr[1]? word1.letterArr[1] : null}</span>
                <span>{word1.letterArr[2]? word1.letterArr[2] : null}</span>
                <span>{word1.letterArr[3]? word1.letterArr[3] : null}</span>
                <span>{word1.letterArr[4]? word1.letterArr[4] : null}</span>
                <span>{word1.letterArr[5]? word1.letterArr[5] : null}</span>
                <span>{word1.letterArr[6]? word1.letterArr[6] : null}</span>
            </div>
            <div>
                <span>{word1.letterArr[0]? word1.letterArr[0] : null}</span>
                <span>{word1.letterArr[1]? word1.letterArr[1] : null}</span>
                <span>{word1.letterArr[2]? word1.letterArr[2] : null}</span>
                <span>{word1.letterArr[3]? word1.letterArr[3] : null}</span>
                <span>{word1.letterArr[4]? word1.letterArr[4] : null}</span>
                <span>{word1.letterArr[5]? word1.letterArr[5] : null}</span>
                <span>{word1.letterArr[6]? word1.letterArr[6] : null}</span>
            </div> */}

            {errors.show ? errorsDisplay : null}
        </div>
    )
}

export default Word