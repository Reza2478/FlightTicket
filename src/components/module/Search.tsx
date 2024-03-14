"use client"

import { TicketDetails } from '@/interfaces/ticketDetails';
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { AiOutlineSearch } from "react-icons/ai";

interface Props {
    tickets: TicketDetails[];
    setFilteredTickets: Dispatch<SetStateAction<TicketDetails[]>>;
    setLoading: Dispatch<SetStateAction<boolean>>;
}

function Search({ tickets, setFilteredTickets, setLoading }: Props) {
    const [searchValue, setSearchValue] = useState("")

    const filter = () => {
        if (searchValue) {
            const data = tickets.filter((item) => item.airline.name === searchValue)
            setFilteredTickets(data)
        }
        else setFilteredTickets(tickets)
    }

    useEffect(() => {
        setTimeout(() => {
            filter()
            setLoading(false)
        }, 1000);
    }, [searchValue])

    const searchHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLoading(true)
        setSearchValue(e.target.value)
    }

    return (
        <div className='bg-[#F3F3F3] border px-2 py-1 flex justify-between rounded-full items-center w-[260px]'>
            <input value={searchValue} onChange={searchHandler} placeholder='جستجوی بلیط' className='bg-[#F3F3F3] text-xs focus:outline-none' />
            <AiOutlineSearch onClick={filter} width={10} color="#555" className="cursor-pointer" />
        </div>
    )
}

export default Search