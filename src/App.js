import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { DiscountForm } from './components/main/discountForm/DiscountForm';



function App() {
  return (
    <DiscountForm/>
    // <Router>
    //   <Routes>
    //     {/* <Route path="/" element={<Home />} /> */}
    //   </Routes>
    // </Router>
  );
}

export default App;