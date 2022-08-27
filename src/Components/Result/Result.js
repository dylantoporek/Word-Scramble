import '../Result/index.scss'
import React, {useState} from 'react'

function Result({props}){
    const word = props.response.word
    const [definitions, setDefinitions] = useState([])

    console.log(props)
    const definitionsNouns = props.response.results.map((word) => {
        if(word.partOfSpeech === 'noun') {
            return (
                <div>
                    <li>noun</li>
                    <span>
                        {word.definition}
                    </span>
                </div>
            )
        }
    }).filter((result)=> result !== undefined)

    const definitionsVerb = props.response.results.map((word) => {
        if(word.partOfSpeech === 'verb') {
            return (
                <div>
                    <li>verb</li>
                    <span>
                        {word.definition}
                    </span>
                </div>
                
            )
        }
    }).filter((result)=> result !== undefined)
    
    const definitionsAdjective = props.response.results.map((word) => {
        if(word.partOfSpeech === 'adjective') {
            return (
                <div>
                    <li>adjective</li>
                    <span>
                        {word.definition}
                    </span>
                </div>
                
            )
        }
    }).filter((result)=> result !== undefined)


    console.log("Your nouns are: ", definitionsNouns)
    console.log('your verbs are: ', definitionsVerb)
    
    return (
        <div className='result-container'>
            <div className='result-word'>
                <h3>
                    {props.response.word.toUpperCase()}
                </h3>
            </div>
            <div> 
                <ul>
                    {definitionsNouns.length > 0? definitionsNouns[0] : null}
                </ul>
                <ul>
                    {definitionsVerb.length > 0? definitionsVerb[0] : null}
                </ul>
                <ul>
                    {definitionsAdjective.length > 0? definitionsAdjective[0] : null}
                </ul>
                
                {/* {props.response.results[0].definition} */}
            </div>
        </div>
    )
}

export default Result