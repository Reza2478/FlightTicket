"use client";

import React, { useState } from "react";
import { TicketDetails } from "@/interfaces/ticketDetails";
import { duratonTime } from "@/utils/calculateDurationtime";
import Image from "next/image";
import { e2p } from "@/utils/replaceNumber";
import { imageChosen } from "@/utils/imageChosen";
import moment from "moment";
import Luggage from "@/public/images/icons/luggage.png";
import ChildCare from "@/public/images/icons/child_care.png";
import Vector from "@/public/images/icons/Vector.png";

interface Props {
  ticket: TicketDetails;
  isShow: boolean;
}

type tabType = "details" | "rules";

function MoreDetails({ ticket, isShow }: Props) {
  const [tabValue, setTabValue] = useState<tabType>("details");

  const changeHandler = (value: tabType) => {
    setTabValue(value);
  };

  return (
    <div
      className={`bg-white grid grid-cols-5 px-2 py-6  transition-all ease-in-out duration-500 ${
        !isShow ? "hidden" : "block"
      } rounded-b-lg`}
    >
      <div className="flex flex-col col-span-3">
        <div className="flex border-b gap-4">
          <button
            onClick={() => changeHandler("details")}
            className={`${
              tabValue === "details" &&
              "text-[#065BAA] border-b-2 border-b-[#065BAA]"
            } transition-all ease-in-out duration-300`}
          >
            جزئیات پرواز
          </button>
          <button
            onClick={() => changeHandler("rules")}
            className={`${
              tabValue === "rules" &&
              "text-[#065BAA] border-b-2 border-b-[#065BAA]"
            } transition-all ease-in-out duration-300`}
          >
            قوانین استرداد
          </button>
        </div>
        <div className="flex flex-col rounded-xl bg-[#F3F3F3] mt-3">
          <div className="bg-primary-100 rounded-xl flex justify-between items-center px-2 py-1">
            <p className="text-[#065BAA]">
              {ticket.departure.airport.city.name.farsi} -{" "}
              {ticket.arrival.airport.city.name.farsi}
            </p>
            <div className="flex justify-center items-center gap-1">
              <p className="text-xs">مدت سفر :</p>
              <p className="text-sm">
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
                  <p>{ticket.airline.name}</p>
                  <p>{ticket.flightClass}</p>
                  <p>{ticket.airplaneModel}</p>
                </div>
                <div className="flex gap-2">
                  <span className="text-gray-500 flex gap-1 font-thin">
                    شماره پرواز :{" "}
                    <p className="text-black font-normal">
                      {e2p(ticket.flightNumber)}
                    </p>
                  </span>
                  <span className="text-gray-500 flex gap-1 font-thin">
                    کلاس نرخی :{" "}
                    <p className="text-black font-normal">
                      {e2p(ticket.fareClass)}
                    </p>
                  </span>
                  <span className="text-gray-500 flex gap-1 font-thin">
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
                    {/* <div className="w-3 h-3 bg-gray-700 inline rounded-full" /> */}
                    <p className="text-xl text-[#065BAA]">
                      {e2p(ticket.departure.dateHourString)}
                    </p>
                    <p className="text-xl text-[#065BAA]">
                      {ticket.departure.airport.city.name.farsi}
                    </p>
                    <p className="text-sm">
                      {ticket.departure.dateString} -{" "}
                      {moment.unix(ticket.departure.date).format("DD MMMM")}
                    </p>
                  </div>

                  <p className="text-sm ">
                    {ticket.departure.airport.name.farsi} (
                    {ticket.departure.airport.iata})
                  </p>
                </div>

                <p className="text-gray-500">
                  {duratonTime(ticket.departure.date, ticket.arrival.date)}
                </p>

                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    {/* <div className="w-3 h-3 bg-gray-700 inline rounded-full" /> */}
                    <p className="text-xl text-[#065BAA]">
                      {e2p(ticket.arrival.dateHourString)}
                    </p>
                    <p className="text-xl text-[#065BAA]">
                      {ticket.arrival.airport.city.name.farsi}
                    </p>
                    <p className="text-sm">
                      {ticket.arrival.dateString} -{" "}
                      {moment.unix(ticket.arrival.date).format("DD MMMM")}
                    </p>
                  </div>

                  <p className="text-sm ">
                    {ticket.arrival.airport.name.farsi} (
                    {ticket.arrival.airport.iata})
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex gap-1 items-center">
                <Image alt="bar" src={Luggage} />
                <p className="text-sm text-red-500">
                  بار مجاز پرواز : 20 کیلوگرم به ازای هر مسافر
                </p>
              </div>
              <div className="flex gap-1 items-center">
                <Image alt="bar" src={ChildCare} />
                <p className="text-sm text-red-500">
                  بار مجاز نوزاد : 10 کیلوگرم به ازای هر مسافر
                </p>
              </div>
              <div className="flex gap-1 items-center">
                <Image alt="bar" src={Vector} />
                <p className="text-sm text-red-500">
                  بار مجاز کابین : 20 کیلوگرم به ازای هر مسافر
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col col-span-2"></div>
    </div>
  );
}

export default MoreDetails;
