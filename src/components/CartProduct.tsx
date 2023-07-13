import React from "react";
import { StoreProduct } from "../../../type";
import Image from "next/image";
import FormattedPrice from "./FormattedPrice";
import { IoMdClose } from "react-icons/io";
import { LuMinus, LuPlus } from "react-icons/lu";
import { useDispatch } from "react-redux";
import { cartActions } from "@/store/slices/cartSlice";

interface Props {
  item: StoreProduct;
}

export default function CartProduct({ item }: Props) {
  const dispatch = useDispatch();
  return (
    <div className="bg-gray-100 rounded-lg flex items-center gap-4">
      <Image
        src={item.image}
        alt={"Imagem do produto " + item.title}
        width={150}
        height={150}
      />
      <div className="flex items-center px-2 gap-4">
        <div className="flex flex-col gap-1">
          <p className="text-lg font-semibold text-amazon_blue">{item.title}</p>
          <p className="text-sm text-gray-600">{item.description}</p>
          <p className="text-sm text-gray-600">
            UnitPrice{" "}
            <span className="font-semibold text-amazon_blue">
              <FormattedPrice amount={item.price} />
            </span>
          </p>
          <div className="flex items-center gap-6">
            <div className="flex items-center mt-1 justify-between border border-gray-300 px-4 py-1 rounded-full w-28 shadow-lg shadow-lg shadow-gray-300">
              <span
                onClick={() => {
                  dispatch(cartActions.increaseQuantityInCart(item._id));
                }}
                className="w-6 h-6 flex items-center justify-center rounded-full text-base bg-transparent hover:bg-gray-300 cursor-pointer decoration-purple-300"
              >
                <LuPlus />
              </span>
              <span>{item.quantity}</span>
              <span
                onClick={() => {
                  dispatch(cartActions.decreaseQuantityInCart(item._id));
                }}
                className="w-6 h-6 flex items-center justify-center rounded-full text-base bg-transparent hover:bg-gray-300 cursor-pointer decoration-purple-300"
              >
                <LuMinus />
              </span>
            </div>
            <div
              onClick={() => {
                dispatch(cartActions.removeProductFromCart(item._id));
              }}
              className="flex items-center text-sm font-medium text-gray-400 hover:text-red-600 cursor-pointer duration-300"
            >
              <IoMdClose className="mt-[2px]" />
            </div>
          </div>
        </div>
        <div className="text-lg font-semibold text-amazon_blue">
          <FormattedPrice amount={item.price * item.quantity} />
        </div>
      </div>
    </div>
  );
}
