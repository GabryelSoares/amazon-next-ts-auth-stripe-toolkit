import React, { useEffect } from "react";
import { SiMediamarkt } from "react-icons/si";
import FormattedPrice from "./FormattedPrice";
import { useCartState } from "@/store/slices/cartSlice";
import { useUserState } from "@/store/slices/userSlice";
import { loadStripe } from "@stripe/stripe-js";
import { useSession } from "next-auth/react";

export default function CartPayment() {
  const { productData } = useCartState();
  const { userInfo } = useUserState();
  const [totalAmount, setTotalAmount] = React.useState(0);

  useEffect(() => {
    const total = productData.reduce((acc, item) => {
      return acc + item.price * item.quantity;
    }, 0);
    setTotalAmount(total);
  }, [productData]);

  const stripePromise = loadStripe(
    String(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)
  );
  const { data: session } = useSession();

  const handleCheckout = async () => {
    const stripe = await stripePromise;

    const response = await fetch("/api/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        items: productData,
        email: String(session?.user?.email),
      }),
    });
    const checkoutSession = await response.json();
    const result: any = await stripe?.redirectToCheckout({
      sessionId: checkoutSession.id,
    });
    if (result.error) {
      alert(result.error.message);
    }
  };

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
      {userInfo ? (
        <div className="flex flex-col items-center">
          <button
            onClick={handleCheckout}
            className="w-full h-10 text-sm font-semibold bg-amazon_blue text-white rounded-lg hover:bg-amazon_yellow hover:text-black duration-300"
          >
            Proceed to buy
          </button>
        </div>
      ) : (
        <div className="flex flex-col items-center">
          <button className="w-full h-10 text-sm font-semibold bg-amazon_blue bg-opacity-50 text-white rounded-lg cursor-not-allowed">
            Proceed to buy
          </button>
          <p className="text-xs mt-1 text-red-500 font-semibold animate-bounce">
            Please login to continue
          </p>
        </div>
      )}
    </div>
  );
}
