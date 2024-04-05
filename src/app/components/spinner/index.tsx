'use client'
import React from 'react'
import { ProgressBar } from 'react-loader-spinner'

export const Spinner = () => {
  return (
    <ProgressBar height={'120'} width={'120'} borderColor="#000" barColor="#fff" ariaLabel = "Common Loader">Spinner</ProgressBar>
  )
}
