import { useState } from 'react'
import './App.css'

function App() {

  return (
    <>
    <Header/>
      {isLoggedIn ? <gameplayPage/> : <loginPage/>}
    <Footer/>
  </>
  )
}

export default App