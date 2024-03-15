import moment from "moment";
import { e2p } from "./replaceNumber";

export const duratonTime = (departureTime: number, arrivalTime: number , display?:"mobile" | "desktop") => {
  const time1 = moment.unix(departureTime);

  const time2 = moment.unix(arrivalTime);

  const duration = moment.duration(time2.diff(time1));

  const hours = duration.hours();
  const minutes = duration.minutes();

  if(display==="mobile"){
    return `${e2p(hours)}h ${e2p(minutes)}m`
  }

  return `${e2p(hours)} ساعت و ${e2p(minutes)} دقیقه`;
};
