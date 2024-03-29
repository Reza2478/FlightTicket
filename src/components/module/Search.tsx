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
        filter()
        setLoading(false)
    }, [searchValue])

    const searchHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLoading(true)
        setTimeout(() => {
            setSearchValue(e.target.value)
        }, 2000);
    }

    return (
        <div className='bg-background border border-gray-400 px-2 py-2 flex justify-between rounded-full items-center sm:w-[260px]'>
            <input onChange={searchHandler} placeholder='جستجوی بلیط' className='bg-background text-xs focus:outline-none' />
            <AiOutlineSearch onClick={filter} width={10} color="#555" className="cursor-pointer" />
        </div>
    )
}

export default Search