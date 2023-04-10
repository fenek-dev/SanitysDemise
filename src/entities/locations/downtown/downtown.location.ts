import { AbandonedAlleyEvent } from "@/entities/events/oneActionEvents/AbandonedAlley/Abandoned Alley.event";
import { LocationType } from "../types";
import image from "./downtown.png";

export const DowntownLocation: LocationType = {
  name: "Downtown",
  image,
  thumbnail: "",
  subLocations: [],
  availableEvents: [AbandonedAlleyEvent],
};
