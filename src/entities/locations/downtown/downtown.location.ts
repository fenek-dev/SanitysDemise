import {
  AbandonedAlleyEvent,
  LostWalletEvent,
  StrangeWomanEvent,
} from "@/entities/events/oneActionEvents";

import { LocationType } from "../types";
import image from "./downtown.png";

export const DowntownLocation: LocationType = {
  availableEvents: [AbandonedAlleyEvent, StrangeWomanEvent, LostWalletEvent],
  image,
  name: "Downtown",
  subLocations: [],
  thumbnail: "",
};
