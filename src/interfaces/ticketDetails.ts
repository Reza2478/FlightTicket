export type FlightList = {
  flightQueryResult: [{ flightList: TicketDetails[] }];
};

export interface TicketDetails {
  price: number;
  remainingSeats: number;
  isCharter: boolean;
  airline: AirLine;
  flightClass: "ECONOMY" | "BUSINESS" | "SYSTEM";
  numberOfStops: number;
  totalStopDuration: number;
  departure: DepartureOrArrival;
  arrival: DepartureOrArrival;
  flightID: string;
  airplaneModel: string;
  promotion: null;
  flightNumber: string;
  fare: Fare;
  fareClass: string;
  options: [];
  priority: number;
  allowedBaggage: AllowedBaggage[];
  refundPolicy: RefundPolicy[];
  commission: number;
  agency: string;
}

interface AirLine {
  code: string;
  name: string;
}

interface DepartureOrArrival {
  date: number;
  dateString: string;
  dateHourString: string;
  terminal: string;
  airport: Airport;
}

interface Airport {
  country: {
    twoLetterCode: string;
    code: string;
    name: Name;
  };

  city: {
    name: Name;
    iata: string;
  };
  name: Name;
  iata: string;
}

interface Fare {
  adult: string;
  child: string;
  infant: string;
}

interface AllowedBaggage {
  code: string;
  name: Name;
  count: number;
  weight: number;
  adultAndChildWeight: number;
  infantWeight: number;
}

interface Name {
  farsi: string;
  english: string;
}

interface RefundPolicy {
  Text: string;
  Percent: number;
}
