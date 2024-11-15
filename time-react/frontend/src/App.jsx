import { useState } from 'react'
import Header from './components/Header/Header'
import Gameplay from './components/Gameplay/Gameplay'
import Footer from './components/Footer/Footer'
import './App.css'

function App() {

  return (
    <>
      <Header/>
      <Gameplay/>
      <Footer/>
    </>
  )
}

export default App