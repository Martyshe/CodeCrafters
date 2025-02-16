import React from 'react';
import './App.css';
import AppRouter from './routes/AppRouter';
import NavMenu from './components/header/navMenu/Navmenu';
import ContactSection from './components/footer/contactSection/ContactSection';

function App() {
  return (
    <>
    <NavMenu />
    <AppRouter />
    <ContactSection/>
    </>
   
  );
}
export default App;
