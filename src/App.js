import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SaleSection from './components/main/saleSection/SaleSection';
import './App.css'



function App() {
  return (
    <SaleSection />
    // <Router>
    //   <Routes>
    //     {/* <Route path="/" element={<Home />} /> */}
    //   </Routes>
    // </Router>
  )
}

export default App;