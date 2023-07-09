import { useUserState, userActions } from "@/store/slices/userSlice";
import React from "react";
import { LuMenu } from "react-icons/lu";
import { useSession, signIn, signOut } from "next-auth/react";
import { useDispatch } from "react-redux";

export default function BottomHeader() {
  const dispatch = useDispatch();
  const { userInfo } = useUserState();
  return (
    <div className="w-full h-10 bg-amazon_light text-sm text-white px-4 flex items-center">
      <p className="flex items-center gap-1 h-8 px-2 border border-transparent hover:border-white cursor-pointer duration-300">
        <LuMenu className="text-xl" /> All
      </p>
      <p className="hidden md:inline-flex items-center h-8 px-2 border border-transparent hover:border-white cursor-pointer duration-300">
        Todays Deals
      </p>
      <p className="hidden md:inline-flex items-center h-8 px-2 border border-transparent hover:border-white cursor-pointer duration-300">
        Customer Service
      </p>
      <p className="hidden md:inline-flex items-center h-8 px-2 border border-transparent hover:border-white cursor-pointer duration-300">
        Registry
      </p>
      <p className="hidden md:inline-flex items-center h-8 px-2 border border-transparent hover:border-white cursor-pointer duration-300">
        Gift Cards
      </p>
      <p className="hidden md:inline-flex items-center h-8 px-2 border border-transparent hover:border-white cursor-pointer duration-300">
        Sell
      </p>
      {userInfo && (
        <p
          onClick={() => {
            signOut();
            dispatch(userActions.removeUserInfo());
          }}
          className="hidden md:inline-flex items-center h-8 px-2 border border-transparent hover:border-red-600 hover:text-red-400 text-amazon_yellow cursor-pointer duration-300"
        >
          Sign Out
        </p>
      )}
    </div>
  );
}
