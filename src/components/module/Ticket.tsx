"use client";

import { BiArrowBack } from "react-icons/bi";
import React, { useState } from "react";
import { TicketDetails } from "@/interfaces/ticketDetails";
import { duratonTime } from "@/utils/calculateDurationtime";
import Image from "next/image";
import { e2p, sp } from "@/utils/replaceNumber";
import { HiChevronDown } from "react-icons/hi2";
import { imageChosen } from "@/utils/imageChosen";
import MoreDetails from "./MoreDetails";

interface Props {
  ticket: TicketDetails;
}

function Ticket({ ticket }: Props) {
  const [isShowMore, setIsShowMore] = useState(false);

  return (
    <div
      className={`flex flex-col ${isShowMore ? "bg-[#F3F3F3]" : "bg-white"
        } transition-all ease-in-out duration-300  rounded-md shadow-md`}
    >
      <div className="flex justify-between items-center  px-2 pt-1 pb-4">
        {/* right section */}
        <div className="flex flex-col">
          <div className="flex gap-2 mb-2">
            {ticket.isCharter && (
              <span className="p-1 bg-primary-100 text-xs rounded-md">
                چارتری
              </span>
            )}
            {ticket.flightClass === "ECONOMY" && (
              <span className="p-1 text-xs rounded-md">اکونومی</span>
            )}
            {ticket.flightClass === "BUSINESS" && (
              <span className="p-1 text-xs rounded-md bg-[#FFDA55] text-[#924600]">بیزینس</span>
            )}
            {ticket.flightClass === "SYSTEM" && (
              <span className="p-1 text-xs rounded-md bg[#F3F3F3]">سیستمی</span>
            )}
          </div>
          <div className="flex gap-16 items-center">
            <div className="flex gap-8 ">
              <div className="flex flex-col items-start justify-center  gap-1 ">
                <span className="rounded-full shadow-sm border-2 bg-white w-10 h-10 flex items-center justify-center">
                  <Image
                    width={30}
                    height={30}
                    alt="image"
                    src={imageChosen(ticket.airline.code)}
                  />
                </span>
                <p className="text-sm font-light">{ticket.airline.name}</p>
              </div>
              <div className="flex flex-col justify-center items-center gap-1">
                <p className="text-[26px]">
                  {e2p(ticket.departure.dateHourString)}
                </p>
                <p className="text-xs">
                  {ticket.departure.airport.city.name.farsi}
                </p>
              </div>
              <BiArrowBack className="mt-2" />
              <div className="flex flex-col justify-center items-center gap-1">
                <p className="text-[26px]">
                  {e2p(ticket.arrival.dateHourString)}
                </p>
                <p className="text-xs">
                  {ticket.arrival.airport.city.name.farsi}
                </p>
              </div>
            </div>
            <p className="text-sm">
              {duratonTime(ticket.departure.date, ticket.arrival.date)}
            </p>
          </div>
        </div>
        {/* left section */}
        <div className="flex flex-col border-r-2 h-full border-dashed items-center gap-4 p-3">
          {ticket.remainingSeats === 0 ? (
            <p className="text-xs text-red-500">ظرفیت تکمیل</p>
          ) : (
            <p className="text-xs text-red-500">
              {ticket.remainingSeats} صندلی باقی مانده
            </p>
          )}

          <div className="flex gap-1 justify-center items-center">
            <p className="text-2xl">{sp(ticket.price)}</p>
            <p className="text-xs font-normal">ریال</p>
          </div>
          <div
            onClick={() => setIsShowMore(!isShowMore)}
            className="text-[#065BAA] text-sm p-2 flex justify-between items-center gap-6 border-2 rounded-full border-[#065BAA] cursor-pointer"
          >
            <p>مشاهده جزئیات و خرید</p>
            <HiChevronDown />
          </div>
        </div>
      </div>

      {/* for details */}
      <MoreDetails ticket={ticket} isShow={isShowMore} />
    </div>
  );
}

export default Ticket;
