import '../GameOver/index.scss'
import {useDispatch, useSelector} from 'react-redux'
import {selectWord1, selectWord2, selectWord3, selectWord4, selectWord5, selectGameOver} from '../../app/Redux Slices/gameSlice'
import Result from '../Result/Result.js'

function GameOver(){
    
    let word1 = useSelector(selectWord1)
    let word2 = useSelector(selectWord2)
    let word3 = useSelector(selectWord3)
    let word4 = useSelector(selectWord4)
    let word5 = useSelector(selectWord5)
    
    let word1Word = word1.sent? word1.letterArr.join('') : null
    let word2Word = word2.sent? word2.letterArr.join('') : null
    let word3Word = word3.sent? word3.letterArr.join('') : null
    let word4Word = word4.sent? word4.letterArr.join('') : null
    let word5Word = word5.sent? word5.letterArr.join('') : null


    let totalScore = word1.score + word2.score + word3.score + word4.score + word5.score
    return (
        <div className='game-over-container'>
            <div className='pop-up-title'>
                <h3>GAME OVER</h3>
            </div>
            <div className='sent-words'>
            {word1.sent? <Result props={word1}/> : null}
            {word2.sent? <Result props={word2}/> : null}
            {word3.sent? <Result props={word3}/> : null}
            {word4.sent? <Result props={word4}/> : null}
            {word5.sent? <Result props={word5}/> : null}
            </div>
            
            <p>Total score: {totalScore}</p>
        </div>
    )
}

export default GameOver