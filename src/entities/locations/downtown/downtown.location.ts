import {
  AbandonedAlleyEvent,
  StrangeWomanEvent,
  LostWalletEvent,
} from "@/entities/events/oneActionEvents";
import { LocationType } from "../types";
import image from "./downtown.png";

export const DowntownLocation: LocationType = {
  name: "Downtown",
  image,
  thumbnail: "",
  subLocations: [],
  availableEvents: [AbandonedAlleyEvent, StrangeWomanEvent, LostWalletEvent],
};
