import React from "react";
import BannerSection from "../components/header/bannerSection/BannerSection";
import { DiscountForm } from "../components/main/discountForm/DiscountForm";
import SaleSection from "../components/main/saleSection/SaleSection";
import CategoriesContainer from "../components/main/categories/CategoriesContainer";
import HeaderWithBtn from "../components/headerForCategoriesAndSaleSections/HeaderWithBtn";

export default function HomePage() {
  return (
    <>
      <BannerSection />
      {/* Секция заголовок - линия - кнопка */}
      <HeaderWithBtn
        headerText="Categories"
        btnText="All categories"
        path={"/categories"}
      />
      <CategoriesContainer amount={4} />
      <DiscountForm />
      <HeaderWithBtn
        headerText="Sale"
        btnText="All sales"
        path={"/all-sales"}
      />
      <SaleSection amount={4} />
    </>
  );
}
