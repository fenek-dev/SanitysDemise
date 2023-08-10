import { LocationType } from "../types";
import image from "./home.png";
import { RestSubloc } from "./sublocs/rest.subloc";

export const HomeLocation: LocationType = {
  availableEvents: [],
  image,
  name: "Home",
  subLocations: [RestSubloc],
  thumbnail: "",
};
