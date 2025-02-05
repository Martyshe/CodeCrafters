import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Categories from './components/main/categories/Categories';



function App() {
  return(
     <Categories /> 
    // <Router>
    //   <Routes>
    //     {/* <Route path="/" element={<Home />} /> */}
    //   </Routes>
    // </Router>
  
    
  );
}

export default App;