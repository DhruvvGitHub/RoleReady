import React from "react";
import { GridLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="w-full h-screen absolute top-0 flex flex-col gap-2  items-center justify-center">
      <GridLoader color="#34d399" size="20px" />
        <h1 className="text-xl font-semibold">Please wait...</h1>
    </div>
  );
};

export default Loading;