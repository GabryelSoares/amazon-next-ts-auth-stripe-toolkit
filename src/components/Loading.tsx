import React from "react";
import { BeatLoader } from "react-spinners";

export const Loading = () => {
  return (
    <div className="w-full flex flex-col gap-6 items-center justify-center py-20">
      <p>Your product is loading...</p>
      <BeatLoader color="#131921" size={40} />
    </div>
  );
};
