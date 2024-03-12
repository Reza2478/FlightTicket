import { BiArrowBack } from "react-icons/bi"; 
import React from 'react'
import { TicketDetails } from '@/interfaces/ticketDetails'
import { duratonTime } from '@/utils/calculateDurationtime'
import Image from 'next/image'
import { e2p } from "@/utils/replaceNumber";
import IranAir from "@/public/images/iranAir.png"


interface Props {
    ticket: TicketDetails
}

function Ticket({ ticket }: Props) {
    return (
        <div className='flex justify-between items-center bg-white rounded-md shadow-md px-2 pt-1 pb-4'>
            {/* right section */}
            <div className="flex flex-col">
                <div className="flex gap-2 mb-2">
                    {ticket.isCharter && <span className='p-1 bg-primary-100 text-xs rounded-md'>چارتری</span>}
                    {ticket.flightClass === "ECONOMY" && <span className='p-1 text-xs rounded-md'>اکونومی</span>}
                    {ticket.flightClass === "BUSINESS" && <span className='p-1 text-xs rounded-md'>بیزینس</span>}
                    {ticket.flightClass === "SYSTEM" && <span className='p-1 text-xs rounded-md'>سیستمی</span>}
                </div>
                <div className="flex gap-16 items-center">
                    <div className="flex gap-8 ">
                        <div className='flex flex-col items-start justify-center  gap-1 '>
                            <span className="rounded-full shadow-sm border-2 "><Image width={30} height={30} alt='image' src={IranAir}/></span>
                            <p className="text-sm font-light">{ticket.airline.name}</p>
                        </div>
                        <div className='flex flex-col justify-center items-center gap-1'>
                            <p className='text-[26px]'>{e2p(ticket.departure.dateHourString)}</p>
                            <p className="text-xs">{ticket.departure.airport.city.name.farsi}</p>
                        </div>
                        <BiArrowBack className="mt-2"/>
                        <div className='flex flex-col justify-center items-center gap-1'>
                            <p className='text-[26px]'>{e2p(ticket.arrival.dateHourString)}</p>
                            <p className="text-xs">{ticket.arrival.airport.city.name.farsi}</p>
                        </div>

                    </div>
                    <p className="text-sm">{duratonTime(ticket.departure.date, ticket.arrival.date)}</p>
                </div>
            </div>
            {/* left section */}
            <div className="flex border-r-2 h-full border-dashed">
                <div>
                    ssssss
                </div>
                <div>
                    a
                </div>
               
            </div>
        </div>
    )
}

export default Ticket