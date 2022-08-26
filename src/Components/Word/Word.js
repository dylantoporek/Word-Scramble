import React, { useState, useEffect } from "react";
import wordSlice from "../../app/Redux Slices/wordSlice";
import '../Word/index.scss'
import {useDispatch, useSelector} from 'react-redux'
import {selectWord1, selectWord2, selectWord3, selectWord4, selectWord5, selectGameOver, selectGuessCount, clearWord, realWordProtocal, guess, gameOverCheck} from '../../app/Redux Slices/gameSlice'

function Word({handleClearAlreadyUsed, errors, setErrors, errorCleanup}){
    const dispatch = useDispatch()
    let word1 = useSelector(selectWord1)
    let word2 = useSelector(selectWord2)
    let word3 = useSelector(selectWord3)
    let word4 = useSelector(selectWord4)
    let word5 = useSelector(selectWord5)
    let guessCount = useSelector(selectGuessCount)
    let gameOver = useSelector(selectGameOver)

    useEffect(()=>{
        dispatch(gameOverCheck())
    }, [guessCount])

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'd8b397fe8fmsh4d32773da56cd7bp1ac308jsn196ce919ec3a',
            'X-RapidAPI-Host': 'wordsapiv1.p.rapidapi.com'
        }
    };

    function checkWord(str){
        if(str.length > 2){
            return str
        } else {
            setErrors({
                message: 'Word must be 3 letters or longer',
                show: true
            })
            setTimeout((errorCleanup(), 1000))
            return null
        }
    }

    function handleSubmit(e){
        let wordPieces = [...e.target.value]
        let filteredPieces = wordPieces.filter((piece) => piece !== ',')
        let wordToSubmit = filteredPieces.join('')
        const validatedWord = checkWord(wordToSubmit)
        if (validatedWord !== null){
            dispatch(guess())
            fetch(`https://wordsapiv1.p.rapidapi.com/words/${wordToSubmit}/`, options)
            .then(response => response.json())
            .then(response => {
                if (response.results !== undefined){
                    console.log(response)
                    dispatch(realWordProtocal(e.target.id))
                    handleClearAlreadyUsed()
                } else {
                    setErrors({
                    message: `${wordToSubmit} is not a valid word, try again.`,
                    show: true
                })
                dispatch(clearWord())
                setTimeout((errorCleanup(), 1000))
                handleClearAlreadyUsed()
                }
            })
            .catch(err => console.log(err));
        }
        
    }
    // document.body.onkeydown = (e) => {
    //     if (e.key === 'Enter'){
    //         if(!word1.sent){
    //             console.log('looking for 1')
    //         } if (word1.sent && !word2.sent){
    //             console.log('looking for 2')
    //         }
    //     }
    // }

    return (
        <div className='words-container'>
            <div style={{
                opacity: word1.sent? '50%' : null,
            }}>
                <span className='word-piece'>{word1.letterArr[0]? word1.letterArr[0] : null}</span>
                <span className='word-piece'>{word1.letterArr[1]? word1.letterArr[1] : null}</span>
                <span className='word-piece'>{word1.letterArr[2]? word1.letterArr[2] : null}</span>
                <span className='word-piece'>{word1.letterArr[3]? word1.letterArr[3] : null}</span>
                <span className='word-piece'>{word1.letterArr[4]? word1.letterArr[4] : null}</span>
                <span className='word-piece'>{word1.letterArr[5]? word1.letterArr[5] : null}</span>
                <span className='word-piece'>{word1.letterArr[6]? word1.letterArr[6] : null}</span>

                <p>{word1.score}</p>
                <button value={word1.letterArr} id='word1' onClick={handleSubmit} style={{
                    backgroundColor: word1.sent? "lightgreen" : null,
                }}>Submit</button>
            </div>
            
            {word1.sent? <div style={{
                opacity: word2.sent? '50%' : null,
            }}>
                <span className='word-piece'>{word2.letterArr[0]? word2.letterArr[0] : null}</span>
                <span className='word-piece'>{word2.letterArr[1]? word2.letterArr[1] : null}</span>
                <span className='word-piece'>{word2.letterArr[2]? word2.letterArr[2] : null}</span>
                <span className='word-piece'>{word2.letterArr[3]? word2.letterArr[3] : null}</span>
                <span className='word-piece'>{word2.letterArr[4]? word2.letterArr[4] : null}</span>
                <span className='word-piece'>{word2.letterArr[5]? word2.letterArr[5] : null}</span>
                <span className='word-piece'>{word2.letterArr[6]? word2.letterArr[6] : null}</span>
                
                <p>{word2.score}</p>
                <button value={word2.letterArr} id='word2' onClick={handleSubmit} style={{
                    backgroundColor: word2.sent? "lightgreen" : null,
                }}>Submit</button>
            </div> : null}
            
            {word2.sent? <div style={{
                opacity: word3.sent? '50%' : null,
            }}>
                <span className='word-piece'>{word3.letterArr[0]? word3.letterArr[0] : null}</span>
                <span className='word-piece'>{word3.letterArr[1]? word3.letterArr[1] : null}</span>
                <span className='word-piece'>{word3.letterArr[2]? word3.letterArr[2] : null}</span>
                <span className='word-piece'>{word3.letterArr[3]? word3.letterArr[3] : null}</span>
                <span className='word-piece'>{word3.letterArr[4]? word3.letterArr[4] : null}</span>
                <span className='word-piece'>{word3.letterArr[5]? word3.letterArr[5] : null}</span>
                <span className='word-piece'>{word3.letterArr[6]? word3.letterArr[6] : null}</span>

                <p>{word3.score}</p>
                <button value={word3.letterArr} id='word3' onClick={handleSubmit} style={{
                    backgroundColor: word3.sent? "lightgreen" : null,
                }}>Submit</button>
            </div> : null}
            {word3.sent? <div style={{
                opacity: word4.sent? '50%' : null,
            }}>
                <span className='word-piece'>{word4.letterArr[0]? word4.letterArr[0] : null}</span>
                <span className='word-piece'>{word4.letterArr[1]? word4.letterArr[1] : null}</span>
                <span className='word-piece'>{word4.letterArr[2]? word4.letterArr[2] : null}</span>
                <span className='word-piece'>{word4.letterArr[3]? word4.letterArr[3] : null}</span>
                <span className='word-piece'>{word4.letterArr[4]? word4.letterArr[4] : null}</span>
                <span className='word-piece'>{word4.letterArr[5]? word4.letterArr[5] : null}</span>
                <span className='word-piece'>{word4.letterArr[6]? word4.letterArr[6] : null}</span>

                <p>{word4.score}</p>
                <button value={word4.letterArr} id='word4' onClick={handleSubmit} style={{
                    backgroundColor: word4.sent? "lightgreen" : null,
                }}>Submit</button>
            </div> : null}
            {word4.sent? <div style={{
                opacity: word5.sent? '50%' : null,
            }}>
                <span className='word-piece'>{word5.letterArr[0]? word5.letterArr[0] : null}</span>
                <span className='word-piece'>{word5.letterArr[1]? word5.letterArr[1] : null}</span>
                <span className='word-piece'>{word5.letterArr[2]? word5.letterArr[2] : null}</span>
                <span className='word-piece'>{word5.letterArr[3]? word5.letterArr[3] : null}</span>
                <span className='word-piece'>{word5.letterArr[4]? word5.letterArr[4] : null}</span>
                <span className='word-piece'>{word5.letterArr[5]? word5.letterArr[5] : null}</span>
                <span className='word-piece'>{word5.letterArr[6]? word5.letterArr[6] : null}</span>

                <p>{word5.score}</p>
                <button value={word5.letterArr} id='word5' onClick={handleSubmit} style={{
                    backgroundColor: word5.sent? "lightgreen" : null,
                }}>Submit</button>
            </div> : null}

        </div>
    )
}

export default Word