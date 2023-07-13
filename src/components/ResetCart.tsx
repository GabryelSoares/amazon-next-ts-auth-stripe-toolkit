import { cartActions } from "@/store/slices/cartSlice";
import React from "react";
import { useDispatch } from "react-redux";

export default function ResetCart() {
  const dispatch = useDispatch();
  return (
    <button
      onClick={() => {
        const confirmReset = window.confirm(
          "Are you sure you want to reset your cart?"
        );
        if (confirmReset) {
          dispatch(cartActions.resetCart());
        }
      }}
      className="w-44 h-10 font-semibold bg-gray-200 rounded-lg hover:bg-red-600 hover:text-white duration-300"
    >
      reset cart
    </button>
  );
}
