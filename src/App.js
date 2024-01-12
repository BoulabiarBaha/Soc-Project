import React, { useState } from 'react';


import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from './Navbar';
import Home from './Home';
import Weather from './Weather';
import Contact from './Contact';



function App() {
 

  return (
<div> 
    <Router>
       <Navbar />
        <Routes>
          <Route exact path="/" element={<Home></Home>} />
          <Route exact path="/Weather" element={<Weather></Weather>} />
          <Route exact path="/contact" element={<Contact></Contact>} />
        </Routes>
    </Router>
</div>  
  );
}

export default App;
