import './App.css'

import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'

//Components
import Navbar from './components/Navbar/Navbar.jsx'

import ErrorPage from './components/Pages/ErrorPage.jsx'
import AboutPage from './components/Pages/AboutPage.jsx'
import Contact from './components/Pages/Contact.jsx'
import HomePage from './components/Pages/HomePage.jsx'
import { useEffect, useState } from 'react'
import CardList from './components/CardList/CardList'

const App = () => {
  
  

  return (
    <>
    <CardList/>
    <Navbar/>
      <Router>
        <div >      
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/Contact' element={<Contact/>}/>
          <Route path='/AboutPage' element={<AboutPage/>}/>
          <Route path='*' element={<ErrorPage/>}/>
        </Routes>
        </div>
    </Router>
    </>
  )
}

export default App
