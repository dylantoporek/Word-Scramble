import React from "react";
import wordSlice from "../../app/Redux Slices/wordSlice";
import '../Word/index.scss'
import {useDispatch, useSelector} from 'react-redux'
import {selectWord1, selectGameOver, selectGuessCount} from '../../app/Redux Slices/gameSlice'

function Word(){
    const dispatch = useDispatch()
    console.log(useSelector(selectWord1))
    return (
        <div className='words-container'>
            <form>
                <input></input>
                <input></input>
                <input></input>
                <input></input>
                <input></input>
                <input></input>
                <input></input>
            </form>
            <form>
                <input></input>
                <input></input>
                <input></input>
                <input></input>
                <input></input>
                <input></input>
                <input></input>
            </form>
            <form>
                <input></input>
                <input></input>
                <input></input>
                <input></input>
                <input></input>
                <input></input>
                <input></input>
            </form>
            <form>
                <input></input>
                <input></input>
                <input></input>
                <input></input>
                <input></input>
                <input></input>
                <input></input>
            </form>
            <form>
                <input></input>
                <input></input>
                <input></input>
                <input></input>
                <input></input>
                <input></input>
                <input></input>
            </form>
        </div>
    )
}

export default Word