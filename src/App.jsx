import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './Components/Footer'
import Header from './Components/Header'
import LandingPage from './Pages/LandingPage'
import WatchHistory from './Pages/WatchHistory'
import Home from './Pages/Home'




function App() {

  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<LandingPage/>}></Route>
      <Route path='/home' element={<Home/>}></Route>
      <Route path='/watchhistory' element={<WatchHistory/>}></Route>
    </Routes>
    <Footer/>
    </>
  )
}

export default App
