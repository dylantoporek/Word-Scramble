import React from "react"
import Instructions from "../../Components/Instructions/Instructions"
import Settings from "../../Components/Settings/Settings"
import '../Main/index.scss'
import LetterList from "../../Components/LetterList/LetterList"
import Word from "../../Components/Word/Word"


function Main({showNavClick, toggleNavPop, handleClosePopUp, scramble, pointsObj}){
    
    return (
        <div className='main-container'>
            <Word/>
            <LetterList scramble={scramble} pointsObj={pointsObj}/>
            {toggleNavPop && showNavClick === 'settings' ? <Settings handleClosePopUp={handleClosePopUp}/> : null}
            {toggleNavPop && showNavClick === 'instructions' ? <Instructions handleClosePopUp={handleClosePopUp}/> : null}
            
        </div>
    )
}

export default Main