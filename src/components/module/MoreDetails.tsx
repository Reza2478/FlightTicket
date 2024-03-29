"use client";

import React, { useState } from "react";
import { TicketDetails } from "@/interfaces/ticketDetails";
import { e2p, sp } from "@/utils/replaceNumber";
import FlightDetails from "./FlightDetails";
import RefundPolicy from "./RefundPolicy";


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
      className={` grid grid-cols-5 gap-4 px-2 py-6 transition-all ease-in-out duration-500  bg-white ${!isShow ? "hidden" : "block"
        } rounded-b-lg`
      }
    >
      <div className="flex flex-col col-span-5 sm:col-span-3">
        <div className="flex border-b gap-4">
          <button
            onClick={() => changeHandler("details")}
            className={`text-sm sm:text-base ${tabValue === "details" &&
              "text-secondary border-b-2 border-b-secondary"
              } `}
          >
            جزئیات پرواز
          </button>
          <button
            onClick={() => changeHandler("rules")}
            className={`text-sm sm:text-base ${tabValue === "rules" &&
              "text-secondary border-b-2 border-b-secondary"
              } `}
          >
            قوانین استرداد
          </button>
        </div>
        {tabValue === "details" ? <FlightDetails ticket={ticket} /> : <RefundPolicy refundPolicy={ticket.refundPolicy} />}
      </div>

      <div className="flex flex-col col-span-5 sm:col-span-2">
        <div className="border-b pb-[1.5px]">
          <p className="text-sm sm:text-base">جزئیات قیمت</p>
        </div>
        <div className="flex flex-col rounded-xl bg-background mt-3 py-4 gap-4 px-3">
          <div className="flex justify-between items-center">
            <p className="text-gray-500 text-sm">بزرگسال (12 سال به بالا)</p>
            <p className="text-sm text-secondary">{e2p(1)} * {sp(ticket.price)} ریال</p>
          </div>
          <hr />

          <div className="flex justify-between items-center">
            <p className=" text-sm">مجموع قیمت</p>
            <p className="text-lg sm:text-xl text-secondary">{sp(ticket.price)} <span className="text-secondary text-sm">ریال</span></p>
          </div>

          <button className="bg-secondary text-sm sm:text-base text-white rounded-full py-2 sm:py-3 mx-6 cursor-pointer hover:bg-[#063aaa] transition-all ease-out">انتخاب بلیط و افزودن سفر</button>
        </div>
      </div>
    </div >
  );
}

export default MoreDetails;
