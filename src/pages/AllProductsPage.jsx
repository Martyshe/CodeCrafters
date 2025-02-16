import React from "react";
import ProductList from "../components/productList/ProductList";

export default function AllProductsPage() {
  const style = {
    maxWidth: "100%",
    padding: "2rem",
    color: "#424436",
  };
  return (
    <div style={style}>
      <h2 style={{ paddingBottom: "2rem" }}>All products</h2>
      <ProductList />
    </div>
  );
}
