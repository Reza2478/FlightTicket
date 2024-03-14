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
    <div className="flex flex-col max-w-[1000px] my-8 mx-auto focus:border-none gap-2">
      <Search setLoading={setLoading} tickets={initialData} setFilteredTickets={setFilteredData} />
      {loading ? <div className='flex items-center justify-center h-screen'>
        <Image src={LoadingGif} alt='loading' />
      </div> : !filteredData.length?<p>parvazi nist</p>: filteredData.slice(0, 5).map((ticket) => (
        <Ticket key={ticket.flightID} ticket={ticket} />
      ))}
    </div>
  );
}

export default HomePage;
