import moment from "moment";
import { e2p } from "./replaceNumber";

export const duratonTime = (departureTime: number, arrivalTime: number) => {
  const time1 = moment.unix(departureTime);

  const time2 = moment.unix(arrivalTime);

  const duration = moment.duration(time2.diff(time1));

  const hours = duration.hours();
  const minutes = duration.minutes();

  return `${e2p(hours)} ساعت و ${e2p(minutes)} دقیقه`;
};
