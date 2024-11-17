import { useState } from 'react'
import Header from './components/Header/Header'
import Gameplay from './components/Gameplay/Gameplay'
import Login from './components/Login/Login'
import Footer from './components/Footer/Footer'
import './App.css'


function App() {
  const [isLoggedIn, setLogIn] = useState(false);

  const handleLogIn = () => {
    setLogIn(true); // explicitly set to true for login
  };

  const handleLogOut = () => {
    setLogIn(false); // explicitly set to false for logout
  };

  
  return (
    <>
      <Header/>
      {isLoggedIn ? (
        <Gameplay onLogOut={handleLogOut} />
      ) : (
        <Login onLogIn={handleLogIn} />
      )}
      <Footer/>
    </>
  )
}

export default App