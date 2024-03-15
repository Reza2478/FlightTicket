import React from 'react'
import moment from 'moment'
import Image from 'next/image'
import { TicketDetails } from '@/interfaces/ticketDetails'
import { duratonTime } from '@/utils/calculateDurationtime'
import { imageChosen } from '@/utils/imageChosen'
import { e2p } from '@/utils/replaceNumber'
import { BiCabinet } from "react-icons/bi";
import { MdOutlineChildCare } from "react-icons/md";
import { MdLuggage } from "react-icons/md";

interface Props {
  ticket: TicketDetails
}

function FlightDetails({ ticket }: Props) {
  return (
    < div className="flex flex-col rounded-xl bg-background mt-3" >
      <div className="bg-primary-100 rounded-xl flex justify-between items-center px-2 py-2">
        <p className="text-secondary text-xs sm:text-base">
          {ticket.departure.airport.city.name.farsi} -{" "}
          {ticket.arrival.airport.city.name.farsi}
        </p>
        <div className="flex justify-center items-center gap-1">
          <p className="text-xs">مدت سفر :</p>
          <p className="text-xs">
            {duratonTime(ticket.departure.date, ticket.arrival.date)}
          </p>
        </div>
      </div>
      <div className="px-2 py-2 flex flex-col gap-5">
        <div className="flex gap-2 items-center">
          <span className="rounded-full shadow-sm border-2 bg-white w-10 h-10 flex items-center justify-center">
            <Image
              width={30}
              height={30}
              alt="image"
              src={imageChosen(ticket.airline.code)}
            />
          </span>
          <div className="flex flex-col gap-2">
            <div className="flex gap-2">
              <p className='text-sm sm:text-base'>{ticket.airline.name}</p>
              <p className='text-sm sm:text-base'>{ticket.flightClass}</p>
              <p className='text-sm sm:text-base'>{ticket.airplaneModel}</p>
            </div>
            <div className="flex gap-2">
              <span className="text-gray-500 text-xs sm:text-base flex gap-1 font-thin">
                شماره پرواز :{" "}
                <p className="text-black font-normal">
                  {e2p(ticket.flightNumber)}
                </p>
              </span>
              <span className="text-gray-500 text-xs sm:text-base flex gap-1 font-thin">
                کلاس نرخی :{" "}
                <p className="text-black font-normal">
                  {e2p(ticket.fareClass)}
                </p>
              </span>
              <span className="text-gray-500 text-xs sm:text-base flex gap-1 font-thin">
                ترمنیال : <p className="text-black font-normal">-</p>
              </span>
            </div>
          </div>
        </div>

        <div className="flex gap-3">
          <div className="flex flex-col pb-10 pt-2 items-center justify-stretch">
            <div className="w-2 h-2 bg-gray-500 inline rounded-full" />
            <div className="border-r-2 h-full border-dashed border-gray-500" />
            <div className="w-2 h-2 bg-gray-500 inline rounded-full" />
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <p className="sm:text-xl text-secondary">
                  {e2p(ticket.departure.dateHourString)}
                </p>
                <p className="sm:text-xl text-secondary">
                  {ticket.departure.airport.city.name.farsi}
                </p>
                <p className="text-xs sm:text-sm">
                  {ticket.departure.dateString} -{" "}
                  {moment.unix(ticket.departure.date).format("DD MMMM")}
                </p>
              </div>

              <p className="sm:text-sm text-xs">
                {ticket.departure.airport.name.farsi} (
                {ticket.departure.airport.iata})
              </p>
            </div>

            <p className="text-gray-500">
              {duratonTime(ticket.departure.date, ticket.arrival.date)}
            </p>

            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <p className="sm:text-xl text-secondary">
                  {e2p(ticket.arrival.dateHourString)}
                </p>
                <p className="sm:text-xl text-secondary">
                  {ticket.arrival.airport.city.name.farsi}
                </p>
                <p className="text-xs sm:text-sm">
                  {ticket.arrival.dateString} -{" "}
                  {moment.unix(ticket.arrival.date).format("DD MMMM")}
                </p>
              </div>

              <p className="sm:text-sm text-xs">
                {ticket.arrival.airport.name.farsi} (
                {ticket.arrival.airport.iata})
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex gap-1 items-center text-red-500">
            <MdLuggage />
            <p className="text-xs sm:text-sm ">
              بار مجاز پرواز : {e2p(ticket.allowedBaggage[0].adultAndChildWeight)} کیلوگرم به ازای هر مسافر
            </p>
          </div>
          <div className="flex gap-1 items-center text-red-500">
            <MdOutlineChildCare />
            <p className="text-xs sm:text-sm ">
              بار مجاز نوزاد : {e2p(ticket.allowedBaggage[0].infantWeight)} کیلوگرم به ازای هر نوزاد
            </p>
          </div>
          <div className="flex gap-1 items-center text-red-500">
            <BiCabinet />
            <p className="text-xs sm:text-sm ">
              بار مجاز کابین : {e2p(ticket.allowedBaggage[0].weight)} کیلوگرم به ازای هر مسافر
            </p>
          </div>
        </div>
      </div>
    </div >
  )
}

export default FlightDetails