import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.scss';
import Header from './Components/Header/Header';
import Main from './Pages/Main/Main';

function App() {
  const [showNavClick, setShowNavClick] = useState(null);
  const [toggleNavPop, setToggleNavPop] = useState(false)
  

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
    console.log("i was clicked")
    setToggleNavPop(false)
  }


//   const word = 'abandon'
// let wordArr = word.split('')


// function shuffle(array) {
//   let currentIndex = array.length, randomIndex;
//   console.log(currentIndex)
//   // While there remain elements to shuffle.
//   while (currentIndex != 0) {

//     // Pick a remaining element.
//     randomIndex = Math.floor(Math.random() * currentIndex);
//     currentIndex--;

//     // And swap it with the current element.
//     [array[currentIndex], array[randomIndex]] = [
//       array[randomIndex], array[currentIndex]];
//   }

//   return array;
// }

// // Used like so
// var arr = [2, 11, 37, 42];
// shuffle(wordArr);
// console.log(wordArr);


  return (
    <div className="app-container">
      <Header handleNavClick={handleNavClick}/>
      <Main handleClosePopUp={handleClosePopUp} toggleNavPop={toggleNavPop} showNavClick={showNavClick}/>
    </div>
  );
}

export default App;
