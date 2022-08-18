import React, {useState, useEffect} from "react";
import '../LetterList/index.scss'

function LetterList({scramble, pointsObj}){

    let scrambleDisplay = scramble.map((letter)=>{
        console.log(pointsObj[letter])
        return <div className='letter'>
            {pointsObj[letter]}
            {letter}
        </div>
    })

    return (
    <div className='letters'>
        {scrambleDisplay}
    </div>
)
}

export default LetterList