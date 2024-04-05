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
      className="rounded-md bg-primary py-2 px-6 text-base text-white transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp"
      onClick={onClick}
    >
      {text}
    </button>
  );
};
