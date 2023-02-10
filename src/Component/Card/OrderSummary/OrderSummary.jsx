import { Button } from "flowbite-react";
import React from "react";

const OrderSummary = () => {
  return (
    <div className="w-[20rem] bg-gray-100 p-3 rounded-sm">
      <h3 className="text-xl font-medium mb-3">Order Summary</h3>
      <div className="flex justify-between items-center text-lg">
        <h5>Subtotal (1 items)</h5>
        <h5>$ 55</h5>
      </div>
      <div className="flex justify-between items-center text-lg">
        <h5>Shipping Fee</h5>
        <h5>$ 20</h5>
      </div>
      <div className="flex justify-between items-center text-lg font-medium pt-3 mt-1 border-t-2 border-gray-300">
        <h4>Total</h4>
        <h4>$ 200</h4>
      </div>
      <Button className="w-full mt-10">PROCEED TO CHECKOUT (1)</Button>
    </div>
  );
};

export default OrderSummary;
