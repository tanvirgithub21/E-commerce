import React from "react";
import CardItems from "./CardItems/CardItems";
import OrderSummary from "./OrderSummary/OrderSummary";

const Card = () => {
  return (
    <div className="flex my-4">
      {/* card items */}
      <CardItems className="w-60%" />

      {/* card item bill */}
      <OrderSummary className="w-40%" />
    </div>
  );
};

export default Card;
