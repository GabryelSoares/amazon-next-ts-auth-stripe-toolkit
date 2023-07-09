import React, { useEffect } from "react";
import { SiMediamarkt } from "react-icons/si";
import FormattedPrice from "./FormattedPrice";
import { useCartState } from "@/store/slices/cartSlice";

export default function CartPayment() {
  const { productData } = useCartState();
  const [totalAmount, setTotalAmount] = React.useState(0);

  useEffect(() => {
    const total = productData.reduce((acc, item) => {
      return acc + item.price * item.quantity;
    }, 0);
    setTotalAmount(total);
  }, [productData]);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-2">
        <span className="bg-green-600 rounded-full p-1 h-6 w-6 text-sm text-white flex items-center justify-center mt-1">
          <SiMediamarkt />
        </span>
        <p className="text-sm">
          Your order is eligible for FREE Delivery. Select this option at
          checkout. See details...
        </p>
      </div>
      <p className="flex items-center justify-between px-2 font-semibold">
        Total:{" "}
        <span className="font-bold text-xl">
          <FormattedPrice amount={totalAmount} />
        </span>
      </p>
      <div className="flex flex-col items-center">
        <button className="w-full h-10 text-sm font-semibold bg-amazon_blue bg-opacity-50 text-white rounded-lg cursor-not-allowed">Proceed to buy</button>
        <p className="text-xs mt-1 text-red-500 font-semibold animate-bounce">Please login to continue</p>
      </div>
    </div>
  );
}
