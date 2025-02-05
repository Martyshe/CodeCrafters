import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Categories from './components/main/categories/Categories';



function App() {
  
  useEffect(() => {
    fetch('http://localhost:3333/categories/all') 
      .then(response => response.json()) 
      .then(data => console.log(data))
      .catch(error => console.error('Ошибка:', error));
  }, []);
  return (
    <Categories />
    // <Router>
    //   <Routes>
    //     {/* <Route path="/" element={<Home />} /> */}
    //   </Routes>
    // </Router>
  );
}

export default App;