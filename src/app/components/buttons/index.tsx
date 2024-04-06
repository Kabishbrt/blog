'use client'
import React from "react";

export const Button = ({
  text,
  onClick,
}: {
  text: string;
  onClick: () => void;
}) => {
  return (
    <button
      className="rounded-md bg-primary lg:py-2 lg:px-6 py-1 px-4 text-base text-white transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp"
      onClick={onClick}
    >
      {text}
    </button>
  );
};
