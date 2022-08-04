import React from "react"
import Instructions from "../../Components/Instructions/Instructions"
import Settings from "../../Components/Settings/Settings"

function Main({showNavClick, toggleNavPop, setToggleNavPop}){
    
  
    
    return (
        <div>
            {toggleNavPop && showNavClick === 'settings' ? <Settings setToggleNavPop={setToggleNavPop}/> : null}
            {toggleNavPop && showNavClick === 'instructions' ? <Instructions setToggleNavPop={setToggleNavPop}/> : null}
        </div>
    )
}

export default Main