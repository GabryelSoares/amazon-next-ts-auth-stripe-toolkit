import React from "react";
import { ProductProps } from "../../type";
import Image from "next/image";
import Link from "next/link";
import { HiShoppingCart } from "react-icons/hi";
import { FaHeart } from "react-icons/fa";
import FormattedPrice from "./FormattedPrice";
import { useDispatch } from "react-redux";
import { cartActions } from "@/store/slices/cartSlice";
import { userActions } from "@/store/slices/userSlice";
import { CardButtons } from "./CardButtons";

interface Props {
  productData: ProductProps[];
}

export default function Products({ productData }: Props) {
  const dispatch = useDispatch();
  return (
    <div className="w-full px-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
      {productData.map(
        ({
          brand,
          category,
          description,
          image,
          isNew,
          oldPrice,
          price,
          title,
          _id,
        }) => (
          <div
            key={_id}
            className="w-full bg-white text-black p-4 border border-gray-300 rounded-lg group overflow-hidden"
          >
            <div className="w-full h-[260px] relative">
              <Link
                href={{
                  pathname: `/${_id}`,
                  query: {
                    _id,
                    brand,
                    category,
                    description,
                    image,
                    isNew,
                    oldPrice,
                    price,
                    title,
                  },
                }}
              >
                <Image
                  className="w-full h-full object-cover scale-90 hover:scale-100 transition-transform duration-300"
                  height={300}
                  width={300}
                  src={image}
                  alt="product image"
                />
              </Link>
              <CardButtons
                product={{
                  _id,
                  brand,
                  category,
                  description,
                  image,
                  isNew,
                  oldPrice,
                  price,
                  title,
                }}
              />
              {isNew && (
                <p className="absolute top-0 right-0 text-amazon_blue font-medium text-xs tracking-wide animate-bounce">
                  !save <FormattedPrice amount={oldPrice - price} />
                </p>
              )}
            </div>
            <hr />
            <div className="px-4 py-3 flex flex-col gap-1">
              <p className="text-xs text-gray-500 tracking-wide">{category}</p>
              <p className="text-base font-medium">{title}</p>
              <p className="flex items-center gap-2">
                <span className="text-sm line-through">
                  <FormattedPrice amount={oldPrice} />
                </span>
                <span className="text-amazon_blue font-semibold">
                  <FormattedPrice amount={price} />
                </span>
              </p>
              <p className="text-xs text-gray-600 text-justify">
                {description.substring(0, 120)}
              </p>
              <button
                onClick={() => {
                  dispatch(
                    cartActions.addToCart({
                      brand,
                      category,
                      description,
                      image,
                      isNew,
                      oldPrice,
                      price,
                      title,
                      _id,
                    })
                  );
                }}
                className="h-10 font-medium bg-amazon_blue text-white rounded-md hover:bg-amazon_yellow hover:text-black duration-300 mt-2"
              >
                add to cart
              </button>
            </div>
          </div>
        )
      )}
    </div>
  );
}
