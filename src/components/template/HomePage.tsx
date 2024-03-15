"use client"

import React, { useState } from "react";
import Search from "@/module/Search";
import LoadingGif from "@/public/images/loading.gif"
import { TicketDetails } from "@/interfaces/ticketDetails";
import Ticket from "@/module/Ticket";
import Image from "next/image";

interface Props {
  initialData: TicketDetails[]
}

function HomePage({ initialData }: Props) {
  const [filteredData, setFilteredData] = useState(initialData)
  const [loading, setLoading] = useState(false)

  return (
    <div className="flex flex-col max-w-[1000px] mx-auto w-full md:w-auto md:px-10 px-5 my-8 focus:border-none gap-2">
      <Search setLoading={setLoading} tickets={initialData} setFilteredTickets={setFilteredData} />
      {loading ?
        <div className='flex items-center justify-center h-screen'>
          <Image src={LoadingGif} alt='loading' />
        </div> :
        !filteredData.length ?
          <p className="flex items-center justify-center h-screen text-xl text-red-500">
            پروازی یافت نشد :(
          </p> :
          filteredData.slice(0, 5).map((ticket) => (
            <Ticket key={ticket.flightID} ticket={ticket} />
          ))}
    </div>
  );
}

export default HomePage;
