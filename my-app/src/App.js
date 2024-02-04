import { useState } from 'react'
import LandingPage from './pages/LandingPage'
import UserRegister from './pages/UserRegister'
import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <BrowserRouter>
      <Routes>
         <Route path="/" exact element={<UserRegister/>}></Route>
         
      </Routes>
     </BrowserRouter>

    </>
  )
}

export default App
