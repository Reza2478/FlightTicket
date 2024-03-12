"use client"
import { AiOutlineSearch } from "react-icons/ai";

import React from 'react'

function Search() {
    return (
        <div className='bg-[#F3F3F3] border px-2 py-1 flex justify-between rounded-full items-center w-[260px]'>
            <input placeholder='جستجوی بلیط' className='bg-[#F3F3F3] text-xs focus:outline-none' />
            <AiOutlineSearch width={10} color="#555" className="cursor-pointer" />
        </div>
    )
}

export default Search