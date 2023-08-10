import { DowntownLocation } from "./downtown/downtown.location";
import { HomeLocation } from "./home/home.location";
import { LocationType } from "./types";

export type LOCATION_NAMES = "Downtown" | "Home";

export const ALL_LOCATIONS: Record<LOCATION_NAMES, LocationType> = {
  Downtown: DowntownLocation,
  Home: HomeLocation,
};
