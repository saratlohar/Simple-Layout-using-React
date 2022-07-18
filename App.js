import React from 'react';
import ReactDOM from 'react-dom';
import Home from './home.js';
import Page1 from './page1';
import Page2 from './page2';
import './App.css';
import { BrowserRouter as Router,Routes,Route,Link } from "react-router-dom";

function App(){
  return(
    <Router>
      <div className='app-main-div'>
        <div className='head'>
          <h2>This is the Home Page</h2>
        </div>
        <div className='nav'>
          <ul>
            <li><Link to='/home'>Home</Link></li>
            <li><Link to='/page1'>Page1</Link></li>
            <li><Link to='/page2'>Page2</Link></li>  
          </ul>
        </div>
        
        <Routes>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/page1' element={<Page1/>}></Route>
        <Route path='/page2' element={<Page2/>}></Route>
        </Routes>
      </div>
    </Router>
  )
}
export default App;