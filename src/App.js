import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Link } from 'react-router-dom';


import Committee from './components/pages/committee';
import Speakers from './components/pages/speakers';
import Contactus from './components/pages/contactus';
import Home from './components/pages/Home';

const pixel = () => {
  return(
    <>
      <header>
        <a href="#">Logo</a>
        <nav>
          <ul>
            <li>
              <Link to ="/">Home</Link>
            </li>
            <li>
              <Link to="/speakers">Speakers</Link>
            </li>
            <li>
              <Link to="/committee">Committee</Link>
            </li>
            <li>
              <Link to="/contactus">Contact Us</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}

function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path='/Committee' element={<Committee />} />
        <Route path='/speakers' element={<Speakers />} />
        <Route path='/contactus' element={<Contactus />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </>
  )
}




export default App;
