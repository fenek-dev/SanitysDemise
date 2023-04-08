import { DowntownLocation } from "./downtown/downtown.location";
import { HomeLocation } from "./home/home.location";
import { LocationType } from "./types";

export type LOCATION_NAMES = "Home" | "Downtown";

export const ALL_LOCATIONS: Record<LOCATION_NAMES, LocationType> = {
  Home: HomeLocation,
  Downtown: DowntownLocation,
};
