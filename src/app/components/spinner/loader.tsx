'use client'
import React from 'react'
import { RotatingLines } from 'react-loader-spinner'
import { useTheme } from "next-themes";
export const Loader = () => {
    const {theme } = useTheme();
    let strokecolor = `${theme==="dark" ? "#808080" : "black"}`
  return (
    <div className="fixed w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-50">
      <RotatingLines
        visible={true}
        width={"96"}
        strokeColor={strokecolor}
        animationDuration={"0.75"}
        ariaLabel="rotating-lines-loading"
      />
    </div>
  )
}
