import { useState } from 'react'
import Header from './components/Header/Header'
import Gameplay from './components/Gameplay/Gameplay'
import Login from './components/Login/Login'
import Footer from './components/Footer/Footer'
import './App.css'


function App() {
  const [isLoggedIn, setLogIn] = useState(false);
  const handleLogIn = () => {
    setLogIn(!isLoggedIn);
  };

  
  return (
    <>
      <Header/>
      <button onClick={handleLogIn}>{isLoggedIn ? 'Log out' : 'Log in'}</button>
      {isLoggedIn ? <Gameplay/> : <Login/>}
      <Footer/>
    </>
  )
}

export default App