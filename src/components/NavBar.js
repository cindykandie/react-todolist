import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';

export default function NavBar() {
  return (
    <Routes>
      <Route path="*/home*" element={<Home />} />
      <Route path="*/about*" element={<About />} />
      <Route path="*/contact*" element={<Contact />} />
    </Routes>
  );
}

// return (
//   <nav className='nav-bar'>
//       <li>Home</li>
//       <li>About</li>
//       <li>Contact</li>
//   </nav>
// )
