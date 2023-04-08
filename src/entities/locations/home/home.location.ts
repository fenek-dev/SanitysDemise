import { LocationType } from "../types";
import image from "./home.png";
import { RestSubloc } from "./sublocs/rest.subloc";

export const HomeLocation: LocationType = {
  name: "Home",
  image,
  thumbnail: "",
  subLocations: [RestSubloc],
};
