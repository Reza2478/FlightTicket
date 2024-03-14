import { FlightList } from '@/interfaces/ticketDetails';
import HomePage from '@/template/HomePage'
import axios from 'axios';


async function getData() {
  try {
    const res = await axios.get<FlightList>(
      "https://d83de549be044706ad0d19ade86cea55.api.mockbin.io/"
    );
    return res.data.flightQueryResult[0].flightList;
  } catch (error) {
    throw new Error("Failed to fetch data");
  }
}


export default async function Home() {
  const data = await getData()
  return (
    <HomePage initialData={data} />
  )
}
