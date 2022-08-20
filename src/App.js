import React, {useState, useEffect} from 'react';
import './App.scss';
import Header from './Components/Header/Header';
import Main from './Pages/Main/Main';
import useLocalStorage from 'use-local-storage';
import {useDispatch, useSelector} from 'react-redux'
import {selectTheme} from './app/Redux Slices/themeSlice'
import {selectWord, selectScramble, selectPoints} from './app/Redux Slices/wordSlice'


function App() {
  const [showNavClick, setShowNavClick] = useState(null);
  const [toggleNavPop, setToggleNavPop] = useState(false)
  // const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useSelector(selectTheme);
  const [scramble, setScramble] = useState([])
  const dispatch = useDispatch()

  const gameWord = useSelector(selectWord)
  const pointsObj = gameWord.points

  // Scramble word function
  function shuffle(array) {
    let currentIndex = array.length, randomIndex;
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    setScramble(array)
  }

  // Scramble the word upon load
  useEffect(() => {
    let word = gameWord.word
    let wordArr = word.split('')
    shuffle(wordArr)
}, [])


 // Open function for Instructions and Settings
  function handleNavClick(e){
    if (!toggleNavPop && !showNavClick){
        setToggleNavPop(true);
        setShowNavClick(e.target.id)
    } if (showNavClick !== e.target.id || !toggleNavPop){
      setToggleNavPop(true);
      setShowNavClick(e.target.id)
    } 
  }

  // 'X button' close function for Instructions and Settings
  function handleClosePopUp(e){
    setToggleNavPop(false)
  }

  return (
    <div className="app-container" data-theme={theme}>
      <Header handleNavClick={handleNavClick} toggleNavPop={toggleNavPop}/>
      <Main 
        handleClosePopUp={handleClosePopUp} 
        toggleNavPop={toggleNavPop} 
        showNavClick={showNavClick}
        scramble={scramble}
        pointsObj={pointsObj}/>
    </div>
  );
}

export default App;
