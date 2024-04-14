'use client'
import React from 'react';
import { IoIosArrowDown } from 'react-icons/io';
const Create = () => {
  return (
    <>
    <div className='contianer flex justify-center h-screen w-100 pt-24 mx-16'>
        <form className="w-full">
            <div className="h-screen">
                <div className="grid  grid-cols-3 grid-rows-8 h-auto gap-2 w-4/5 mx-auto">
                    <div className="row-span-1 col-span-1 flex justify-start items-center">
                        <label htmlFor="title" className='p-4'>Blog Title</label>
                    </div>  
                    <div className="dark:bg-black col-span-2 flex items-center justify-start">
                        <input className='border border-collapse rounded-md h-10 p-2 w-full'></input>
                    </div>
                    <div className="col-span-1 flex items-center justify-start">
                        <select 
                            className={`appearance-none bg-transparent rounded p-4 leading-tight focus:outline-none cursor-pointer`}>
                            <option className='dark:bg-black hover:cursor-pointer' value="BreakingOut">Demo 123 demo</option>
                            <option className='dark:bg-black hover:cursor-pointer' value="Breaking Down">Demo</option>
                            <option className='dark:bg-black hover:cursor-pointer' value="Breaking Down">Demo</option>
                        </select>
                        <div className=" pointer-events-none">
                            <IoIosArrowDown/>
                        </div>
                    </div>
                    <div className="col-span-1 p-2">
                        <input className='cursor-pointer' type="file" max={1000000} accept="image/*" />
                    </div>
                    <div className="col-span-1 flex p-2 gap-2">
                        <div className='mt-0.5'>
                            <input type="checkbox" id="allow-comments" name="allow-comments" value="yes" />
                        </div>
                        <label htmlFor="allow-comments" >Allow Comments</label>
                    </div>
                    <div className="row-span-6 col-span-3 w-full h-full">
                        <textarea className='border-collapse border rounded-md w-full h-full'>

                        </textarea>
                    </div>
                </div>
            </div>
        </form>
    </div>
    </>
  )
}
export default Create;