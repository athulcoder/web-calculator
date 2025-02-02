import React from "react";

const Button = ({ label }) => {
  return (
    <button className="bg-gray-800 py-4 px-8 rounded-full flex justify-center items-center text-2xl text-slate-100">
      {label}
    </button>
  );
};

export default Button;
