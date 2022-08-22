import React from "react";
import wordSlice from "../../app/Redux Slices/wordSlice";
import '../Word/index.scss'
import {useDispatch, useSelector} from 'react-redux'
import {selectWord1, selectGameOver, selectGuessCount} from '../../app/Redux Slices/gameSlice'

function Word(){
    const dispatch = useDispatch()
    let word1 = (useSelector(selectWord1))
    return (
        <div className='words-container'>
            <div>
                <span>{word1.letterArr[0]? word1.letterArr[0] : null}</span>
                <span>{word1.letterArr[1]? word1.letterArr[1] : null}</span>
                <span>{word1.letterArr[2]? word1.letterArr[2] : null}</span>
                <span>{word1.letterArr[3]? word1.letterArr[3] : null}</span>
                <span>{word1.letterArr[4]? word1.letterArr[4] : null}</span>
                <span>{word1.letterArr[5]? word1.letterArr[5] : null}</span>
                <span>{word1.letterArr[6]? word1.letterArr[6] : null}</span>
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
        </div>
    )
}

export default Word