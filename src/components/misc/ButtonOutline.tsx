import React from "react";

const ButtonOutline = ({ children }: any) => {
  return (
    <button className="font-medium tracking-wide py-2 px-5 sm:px-8 border border-teal-400 text-teal-400 bg-white-500 outline-none rounded-l-full rounded-r-full capitalize hover:bg-teal-400 hover:text-white transition-all">
      {" "}
      {children}
    </button>
  );
};

export default ButtonOutline;