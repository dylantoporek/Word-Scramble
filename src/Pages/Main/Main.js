import React from "react"
import Instructions from "../../Components/Instructions/Instructions"
import Settings from "../../Components/Settings/Settings"
import '../Main/index.scss'
import LetterList from "../../Components/LetterList/LetterList"

function Main({showNavClick, toggleNavPop, handleClosePopUp, scramble, pointsObj}){
    
    // function handleRandomClick(){
    //     console.log('iwasclicked')
    //   }
    
    return (
        <div className='main-container'>
            <LetterList scramble={scramble} pointsObj={pointsObj}/>
            {toggleNavPop && showNavClick === 'settings' ? <Settings handleClosePopUp={handleClosePopUp}/> : null}
            {toggleNavPop && showNavClick === 'instructions' ? <Instructions handleClosePopUp={handleClosePopUp}/> : null}
            
        </div>
    )
}

export default Main