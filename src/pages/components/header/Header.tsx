import React, { useEffect } from "react";
import Image from "next/image";
import logo from "../../../images/logo.png";
import cartIcon from "../../../images/cartIcon.png";
import { SlLocationPin } from "react-icons/sl";
import { HiOutlineSearch } from "react-icons/hi";
import { BiCaretDown } from "react-icons/bi";
import Link from "next/link";
import { useCartState } from "@/store/slices/cartSlice";
import { useUserState, userActions } from "@/store/slices/userSlice";
import { useSession, signIn } from "next-auth/react";
import { useDispatch } from "react-redux";

export default function Header() {
  const dispatch = useDispatch();
  const { productData } = useCartState();
  const { favoriteData, userInfo } = useUserState();
  const { data: session } = useSession();

  useEffect(() => {
    if (session?.user) {
      console.log(`session:: `, session);
      dispatch(
        userActions.setUserInfo({
          name: String(session.user.name),
          email: String(session.user.email),
          image: String(session.user.image),
        })
      );
    }
  }, [session]);

  return (
    <div className="w-full h-20 bg-amazon_blue text-white text-lightText sticky top-0 z-50">
      <div className="h-full w-full mx-auto inline-flex items-center justify-between gap-1 mdl: gap-3 px-4 ">
        <Link
          href="/"
          className="px-2 border border-transparent hover:border-white cursor-pointer diration-300 flex items-center justify-center h-[70%]"
        >
          <Image className="w-28 object-cover mt-1" src={logo} alt="logo" />
        </Link>
        <div className="px-2 border border-transparent hover:border-white cursor-pointer diration-300 flex items-center justify-center h-[70%] hidden xl:inline-flex gap-1">
          <SlLocationPin />
          <div className="text-xs">
            <p>Deliver to</p>
            <p className="text-white font-bold uppercase">USA</p>
          </div>
        </div>
        <div className="flex-1 h-10 hidden md:inline-flex items center justify-between relative">
          <input
            className="w-full h-full rounded-md px-2 placeholder:text-sm text-base text-black border-[3px] border-transparend outline-none focus-visible:border-amazon_yellow"
            type="text"
            placeholder="Search products"
          />
          <span className="w-12 h-full bg-amazon_yellow text-black text-2xl flex items-center justify-center absolute right-0 rounded-tr-md rounded-br-md">
            <HiOutlineSearch />
          </span>
        </div>
        {userInfo ? (
          <div className="text-xs text-gray-100 flex flex-col justify-center px-2 border border-transparent hover:border-white cursor-pointer duration-300 h-[70%]">
            <Image
              src={userInfo.image}
              alt="Foto do usuário"
              className="w-8 h-8 rounded-full object-cover"
              height={80}
              width={80}
            />
            <div className="text-xs text-gray-100 flex flex-col justify-between">
              <p className="text-white font-bold">Hello, {userInfo.name}</p>
              <p>{userInfo.email}</p>
            </div>
          </div>
        ) : (
          <div
            onClick={() => signIn()}
            className="text-xs text-gray-100 flex flex-col justify-center px-2 border border-transparent hover:border-white cursor-pointer duration-300 h-[70%]"
          >
            <p>Hello, sign in</p>
            <p className="text-white font-bold flex items-center">
              Account & Lists{" "}
              <span>
                <BiCaretDown />
              </span>
            </p>
          </div>
        )}
        <div className="text-xs text-gray-100 flex flex-col justify-center px-2 border border-transparent hover:border-white cursor-pointer duration-300 h-[70%] relative">
          <p>Marked</p>
          <p className="text-white font-bold">& Favorite</p>
          {favoriteData.length && (
            <span className="absolute right-2 top-2 w-4 h-4 border-[1px] border-gray-400 flex items-center justify-center text-xs text-amazon_yellow">
              {favoriteData.length}
            </span>
          )}
        </div>
        <Link
          href="/cart"
          className="flex items-center px-2 border border-transparent hover:border-white cursor-pointer duration-300 h-[70%] relative"
        >
          <Image
            className="w-auto object-cover h-8"
            src={cartIcon}
            alt="cart image"
          />
          <p className="text-xs text-white font-bold mt-3">Cart</p>
          <span className="absolute text-amazon_yellow text-sm top-2 left-[29px] font-semibold">
            {productData.length ?? 0}
          </span>
        </Link>
      </div>
    </div>
  );
}
