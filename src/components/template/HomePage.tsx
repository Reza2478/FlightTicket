import React, { useState } from 'react'
import Search from '@/module/Search'
import axios from 'axios'
import { FlightList } from '@/interfaces/ticketDetails'
import Ticket from '@/module/Ticket'

async function getData() {
  try {
    const res = await axios.get<FlightList>('https://d83de549be044706ad0d19ade86cea55.api.mockbin.io/')
    return res.data.flightQueryResult[0].flightList
  } catch (error) {
    throw new Error('Failed to fetch data')
  }
}

async function HomePage() {

  const data = await getData()

  // console.log("data=>",data);


  return (
    <div className='flex flex-col max-w-[1000px] my-8 mx-auto focus:border-none gap-2'>
      <Search />
      {data.map(ticket => <Ticket key={ticket.flightID} ticket={ticket} />)}
    </div>
  )
}

export default HomePage