import IranAir from "@/public/images/iranAir.png";
import Zagros from "@/public/images/zagros.png";
import Varesh from "@/public/images/varesh.png";
import Taban from "@/public/images/taban.png";
import Ata from "@/public/images/ata.png";
import Karun from "@/public/images/karun.png";
import Aseman from "@/public/images/aseman.png";
import Chabahar from "@/public/images/chabahar.png";
import Saha from "@/public/images/saha.png";

export const imageChosen = (airlineCode: string) => {
  switch (airlineCode) {
    case "ZV":
      return Zagros;
      break;
    case "NV":
      return Karun;
      break;
    case "I3":
      return Ata;
      break;
    case "IRU":
      return Chabahar;
      break;
    case "EP":
      return Aseman;
      break;
    case "HH":
      return Taban;
      break;
    case "IRZ":
      return Saha;
      break;
    case "VR":
      return Varesh;
      break;

    default:
      return IranAir;
      break;
  }
};
