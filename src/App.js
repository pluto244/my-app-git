import React from 'react'
import './App.css'
import { Routes, BrowserRouter, Route } from 'react-router-dom'
import Content from './components/Content/Content'
import DialogsContainer from './components/Dialogs/DialogsContainer'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import UsersContainer from './components/Users/UsersContainer'
const App = (props) => {
  return (

    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Routes>

            <Route path="/Dialogs" element={
              <DialogsContainer
              />} />
            <Route path='/Profile' element={
              <Content
              />} />
            <Route path='/Users' element={
              <UsersContainer/>
              } />

          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
