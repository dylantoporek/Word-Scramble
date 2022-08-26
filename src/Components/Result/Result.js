import '../Result/index.scss'

function Result({props}){

    console.log(props)
    return (
        <div>
            {props.response.word}
             <br />
                {props.response.results[0].partOfSpeech}
            <div>
                {props.response.results[0].definition}
            </div>
        </div>
    )
}

export default Result