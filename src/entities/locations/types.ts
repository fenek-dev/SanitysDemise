import { LOCATION_NAMES } from ".";
import { EventType } from "../events/types";

export interface LocationType {
  name: LOCATION_NAMES;
  thumbnail: string;
  image: string;
  subLocations?: SublocationType[];
  availableEvents: EventType[];
}

export interface SublocationType {
  name: string;
  triggerEvent: string;
  image: string;
}
