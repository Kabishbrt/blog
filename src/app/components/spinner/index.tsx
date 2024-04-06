'use client'
import React from 'react'
import { TailSpin } from 'react-loader-spinner'

export const Spinner = () => {
  return (
    <TailSpin
      visible={true}
      height="80"
      width="80"
      color="grey"
      ariaLabel="tail-spin-loading"
      radius="1"
      wrapperStyle={{}}
      wrapperClass=""
      />
  )
}
