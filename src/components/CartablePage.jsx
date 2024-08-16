import React from "react";
import CartableTable from "./CartableTable";
import flag1 from "../assets/flag1.png";
import flag2 from "../assets/flag2.png";

const CartablePage = () => {
  return (
    <div className="cartable-container">
      <div className="cartable-title">
        <img src={flag1} alt={flag1} />
        <h4> کارتابل من </h4>
        <img src={flag2} alt={flag2} />
      </div>

      <br />
      <CartableTable />
    </div>
  );
};

export default CartablePage;
