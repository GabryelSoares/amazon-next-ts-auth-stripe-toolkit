import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { CardButtons } from "@/components/CardButtons";
import { useDispatch } from "react-redux";
import FormattedPrice from "@/components/FormattedPrice";
import { cartActions } from "@/store/slices/cartSlice";
import { Loading } from "@/components/Loading";

export default function DynamicPage() {
  const dispatch = useDispatch();
  const [product, setProduct] = useState<any>({});
  const [loading, setLoading] = useState<boolean>(true);
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
    setProduct(router.query);
  }, [router]);

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-4 md:py-10">
      {loading ? (
        <Loading />
      ) : (
        <div className="w-full grid md:grid-cols-3 gap-3 bg-gray-100 rounded-lg">
          <div className="flex items-center justtify-center bg-gray-200 rounded-lg relative group overflow-hidden">
            <Image
              src={product.image}
              alt="Product Image"
              width={500}
              height={500}
            />

            <CardButtons product={product} />
          </div>
          <div className="md:col-span-2 flex flex-col gap-3 justify-center p-4">
            <p className="text-xs md:text-sm text-amazon_blue font-semibold -mb-3">
              {product.category}_{product.brand}
            </p>
            <h1 className="text-xl md:text-3xl tracking-wide font-semibold">
              {product.title}
            </h1>
            <p className="text-sm text-gray-600">{product.description}</p>
            <div>
              <p className="text-base text-gray-600 flex items-center gap-1">
                Price:
                <span className="text-lg text-amazon_blue font-semibold">
                  <FormattedPrice amount={product.price} />
                </span>
                <span className="ml-1 line-through">
                  <FormattedPrice amount={product.oldPrice} />
                </span>
              </p>
              <p className="text-sm text-gray-500 flex items-center gap-1">
                Your saved:{" "}
                <span>
                  <FormattedPrice amount={product.oldPrice - product.price} />
                </span>
              </p>
              <button
                onClick={() => {
                  dispatch(cartActions.addToCart(product));
                }}
                className="w-full md:w-96 h-12 bg-amazon_blue text-gray-200 hover:bg-amazon_yellow hover:text-amazon_blue duration-300 rounded-lg mt-5 text-base font-semibold"
              >
                add to cart
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
