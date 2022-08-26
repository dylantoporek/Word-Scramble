import '../Result/index.scss'

function Result({props}){

    console.log(props)
    const definitionsNouns = props.response.results.map((word) => {
        if(word.partOfSpeech === 'noun') {
            return (
                <li>
                    {word.definition}
                </li>
            )
        }
    })

    const definitionsVerb = props.response.results.map((word) => {
        if(word.partOfSpeech === 'verb') {
            return (
                <li>
                    {word.definition}
                </li>
            )
        }
    })

    console.log("Your nouns are: ", definitionsNouns)

    return (
        <div className='result-container'>
            <div className='result-word'>
                <h2>
                    {props.response.word}
                </h2>
                <br />
                /{props.response.pronunciation.all}/
            </div>
             <br />
            {props.response.results[0].partOfSpeech}
            <div>
                Noun 
                <br />
                <ul>
                    {definitionsNouns}
                </ul>
                Verb 
                <br />
                <ul>
                    {definitionsVerb}
                </ul>
                
                {/* {props.response.results[0].definition} */}
            </div>
        </div>
    )
}

export default Result