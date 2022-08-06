import React from "react"
import Instructions from "../../Components/Instructions/Instructions"
import Settings from "../../Components/Settings/Settings"
import '../Main/index.scss'

function Main({showNavClick, toggleNavPop, handleClosePopUp}){
    
    // function handleRandomClick(){
    //     console.log('iwasclicked')
    //   }
    
    return (
        <div className='main-container'>
            {toggleNavPop && showNavClick === 'settings' ? <Settings handleClosePopUp={handleClosePopUp}/> : null}
            {toggleNavPop && showNavClick === 'instructions' ? <Instructions handleClosePopUp={handleClosePopUp}/> : null}
        </div>
    )
}

export default Main