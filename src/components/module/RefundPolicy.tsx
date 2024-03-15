import { TicketDetails } from '@/interfaces/ticketDetails'
import { e2p } from '@/utils/replaceNumber';
import React from 'react'

type RefundPolicy = Pick<TicketDetails, "refundPolicy">

function RefundPolicy({ refundPolicy }: RefundPolicy) {
    return (
        <div className="flex flex-col rounded-xl bg-background mt-3 gap-3 p-2">
            {refundPolicy.map((item, index) => <div key={index} className="bg-white flex flex-col gap-2 rounded-lg p-2 gap-y-2">
                <p className="text-red-500 text-sm sm:text-base">{e2p(item.Percent)}% جریمه :</p>
                <p className="text-xs sm:text-sm">{e2p(item.Text)}</p>
            </div>)}
        </div>

    )
}
export default RefundPolicy;