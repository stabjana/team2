import { useState } from 'react'
import Header from './components/Header/Header'
import Gameplay from './components/Gameplay/Gameplay'
import Login from './components/Login/Login'
import Footer from './components/Footer/Footer'
import users from './data/users.json';
import './App.css'

function App() {
  const [isLoggedIn, setLogIn] = useState(false);
  const [error, setError] = useState('');
  const [currentUser, setCurrentUser] = useState(null); // store the logged-in user's info
  const [loading, setLoading] = useState(false);//USE THIS STATE LATER WITH FETCH OR DB REQUEST

  const handleLogIn = async (username, password) => {
    setLoading(true);
    try {
      const user = users.find(
        (user) => user.username === username && user.password === password
      );
      if (user) {
        setLogIn(true);// explicitly set to true for login
        setError('');
        setCurrentUser(user); // set the logged-in user's data
        console.log(`${user.username} has logged in`)
      } else {
        setError('Invalid username or password');
      }
    } catch (err){
      console.error('Login error:', err)
    } finally {
      setLoading(false);
    }   
  };

  const handleLogOut = () => {
    setLogIn(false); // explicitly set to false for logout
    setCurrentUser(null); // clear the current user
  };

  return (
    <>
      <Header/>
      {isLoggedIn ? (
        <Gameplay onLogOut={handleLogOut} user={currentUser}/>
      ) : (
        <Login onLogIn={handleLogIn} error={error} loading={loading}/>
      )}
      <Footer/>
    </>
  )
}

export default App