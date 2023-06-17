import React from 'react';
import './App.css';
import { Routes, BrowserRouter, Route } from 'react-router-dom';
import Content from './components/Content/Content'
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
const App = (props) => {
//ss
  return (
    
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Routes>

          <Route path="/Dialogs" element ={ <DialogsContainer
                  store={props.store}
                  />} />
            <Route path='/Profile' element={<Content 
               
                  />} />

          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
