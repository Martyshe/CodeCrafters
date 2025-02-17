import React from "react";
import SaleSection from "../components/main/saleSection/SaleSection";

export default function AllSalesPage() {
  const style = {
    maxWidth: "100%",
    padding: "2rem",
    paddingBottom: "0",
    color: "#424436",
  };
  return (
    <div>
      <h2 style={style}>Discounted items</h2>
      <SaleSection amount={12} />
    </div>
  );
}
