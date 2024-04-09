'use client'
import React from 'react'
import { Hourglass } from 'react-loader-spinner'

export const Spinner = () => {
  return (
    <>
    <div className="flex h-screen justify-center items-center">

      <Hourglass
        visible={true}
        height="80"
        width="80"
        ariaLabel="hourglass-loading"
        wrapperStyle={{}}
        wrapperClass=""
        colors={['#3a5be0','#4a6cf7']}
        />
    </div>
    </>
    )
}
