import { LOCATION_NAMES } from ".";

export interface LocationType {
  name: LOCATION_NAMES;
  thumbnail: string;
  image: string;
  subLocations?: SublocationType[];
}

export interface SublocationType {
  name: string;
  triggerEvent: string;
  image: string;
}
