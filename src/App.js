import React from 'react';
import './App.css';
import NavMenu from './components/header/navMenu/Navmenu';
import BannerSection from './components/header/bannerSection/BannerSection';
import Categories from './components/main/categories/Categories';
import { DiscountForm } from './components/main/discountForm/DiscountForm';
import SaleSection from './components/main/saleSection/SaleSection';
import ContactSection from './components/footer/contactSection/ContactSection';



function App() {
  return (
    <>
    <NavMenu />
    <BannerSection />
    <Categories />
    <DiscountForm/>
    <SaleSection />
    <ContactSection/>
    </>
   
  );
}
export default App;