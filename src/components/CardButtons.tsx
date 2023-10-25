import { ProductProps } from "../../type";
import React from "react";
import { FaHeart } from "react-icons/fa";
import { HiShoppingCart } from "react-icons/hi";
import { useDispatch } from "react-redux";
import { cartActions } from "@/store/slices/cartSlice";
import { userActions } from "@/store/slices/userSlice";

interface Props {
  product: ProductProps;
}
export const CardButtons = ({ product }: Props) => {
  const dispatch = useDispatch();
  return (
    <div className="w-12 h-24 absolute bottom-10 right-0 border-[1px] border-gray-400 bg-white rounded-md flex flex-col translate-x-20 group-hover:-translate-x-1 transition-transform duration-300">
      <span
        onClick={() => {
          dispatch(cartActions.addToCart(product));
        }}
        className="w-full h-full border-b-[1px] border-b-gray-400 flex items-center justify-center text-xl bg-transparent hover:bg-amazon_yellow cursor-pointer duration-300"
      >
        <HiShoppingCart />
      </span>
      <span
        onClick={() => dispatch(userActions.favorite(product))}
        className="w-full h-full border-b-[1px] border-b-gray-400 flex items-center justify-center text-xl bg-transparent hover:bg-amazon_yellow cursor-pointer duration-300"
      >
        <FaHeart />
      </span>
    </div>
  );
};
