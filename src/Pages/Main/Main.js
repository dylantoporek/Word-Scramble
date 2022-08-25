import React, {useState} from "react"
import Instructions from "../../Components/Instructions/Instructions"
import Settings from "../../Components/Settings/Settings"
import '../Main/index.scss'
import LetterList from "../../Components/LetterList/LetterList"
import Word from "../../Components/Word/Word"


function Main({showNavClick, toggleNavPop, handleClosePopUp, scramble, pointsObj}){
    const [alreadyUsed, setAlreadyUsed] = useState([])

    function handleAddToAlreadyUsed(str){
        setAlreadyUsed([...alreadyUsed, str])
    }

    function handleRemoveLastFromAlreadyUsed(){
        alreadyUsed.splice(-1)
        setAlreadyUsed([...alreadyUsed])
    }

    function handleClearAlreadyUsed(){
        setAlreadyUsed([])
    }
    return (
        <div className='main-container'>
            <Word handleClearAlreadyUsed={handleClearAlreadyUsed}/>
            <LetterList
                handleAddToAlreadyUsed={handleAddToAlreadyUsed}
                handleRemoveLastFromAlreadyUsed={handleRemoveLastFromAlreadyUsed} 
                handleClearAlreadyUsed={handleClearAlreadyUsed}
                alreadyUsed={alreadyUsed} 
                scramble={scramble} 
                pointsObj={pointsObj}/>
            {toggleNavPop && showNavClick === 'settings' ? <Settings handleClosePopUp={handleClosePopUp}/> : null}
            {toggleNavPop && showNavClick === 'instructions' ? <Instructions handleClosePopUp={handleClosePopUp}/> : null}
            
        </div>
    )
}

export default Main